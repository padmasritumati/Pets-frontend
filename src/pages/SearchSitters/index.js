import React, { useEffect, useState, useRef } from "react";
import { getServices } from "../../store/searchSitter/actions";
import { selectSitterList } from "../../store/searchSitter/selectors";
import { useDispatch, useSelector } from "react-redux";
import { Container, Row, Col, Form, Button, Image } from "react-bootstrap";
import { selectToken, selectUser } from "../../store/user/selectors";
import Geocode from "react-geocode";
import Map from "../../components/Map";
import Sitter from "./Sitter";
import "./search.css";
import { apiKeyGoogle } from "../../config/constants";

let autoComplete;

const loadScript = (url, callback) => {
  let script = document.createElement("script");
  script.type = "text/javascript";

  if (script.readyState) {
    script.onreadystatechange = function () {
      if (script.readyState === "loaded" || script.readyState === "complete") {
        script.onreadystatechange = null;
        callback();
      }
    };
  } else {
    script.onload = () => callback();
  }

  script.src = url;
  document.getElementsByTagName("head")[0].appendChild(script);
};

function handleScriptLoad(updateQuery, autoCompleteRef) {
  autoComplete = new window.google.maps.places.Autocomplete(
    autoCompleteRef.current,
    { types: ["geocode"], componentRestrictions: { country: "nl" } }
  );
  autoComplete.setFields(["address_components", "formatted_address"]);
  autoComplete.addListener("place_changed", () =>
    handlePlaceSelect(updateQuery)
  );
}

async function handlePlaceSelect(updateQuery) {
  const addressObject = autoComplete.getPlace();
  const query = addressObject.formatted_address;
  updateQuery(query);
}

export default function SearchSitters() {
  const dispatch = useDispatch();
  const sitterList = useSelector(selectSitterList);
  console.log("sitter", sitterList);

  useEffect(() => {
    dispatch(getServices());
  }, [dispatch]);

  const token = useSelector(selectToken);
  const user = useSelector(selectUser);
  const [yes, setYes] = useState();
  const [radio, setRadio] = useState();
  const [size, setSize] = useState();
  const [service, setService] = useState();
  const [query, setQuery] = useState();
  const autoCompleteRef = useRef(null);

  const location = {
    address: "1600 Amphitheatre Parkway, Mountain View, california.",
    lat: 37.42216,
    lng: -122.08427,
  };

  useEffect(() => {
    loadScript(
      `https://maps.googleapis.com/maps/api/js?key=${apiKeyGoogle}&libraries=places&language=en`,
      () => handleScriptLoad(setQuery, autoCompleteRef)
    );
  }, []);

  Geocode.setApiKey(apiKeyGoogle);
  Geocode.setRegion("nl");

  const dogSelected = () => {
    return (
      <>
        <Form.Check
          inline
          label="Boarding"
          type="radio"
          value="Boarding"
          name="service"
          onChange={(e) => setService(e.target.value)}
        />
        <Form.Check
          inline
          label="House Sitting"
          type="radio"
          value="HouseSitting"
          name="service"
          onChange={(e) => setService(e.target.value)}
        />
        <Form.Check
          inline
          label="Drop-In Visitsing"
          type="radio"
          value="Drop-InVisitsing"
          name="service"
          onChange={(e) => setService(e.target.value)}
        />
        <Form.Check
          inline
          label=" Doggy Day Care"
          type="radio"
          value="DoggyDayCare"
          name="service"
          onChange={(e) => setService(e.target.value)}
        />
        <Form.Check
          inline
          label="Dog Walking"
          type="radio"
          id="idforDog"
          value="DogWalking"
          name="service"
          onChange={(e) => setService(e.target.value)}
        />
      </>
    );
  };

  const catSelected = () => {
    return (
      <>
        <Form.Check
          inline
          label="Boarding"
          type="radio"
          value="Boarding"
          name="service"
          onChange={(e) => setService(e.target.value)}
        />
        <Form.Check
          inline
          label="House Sitting"
          type="radio"
          value="HouseSitting"
          name="service"
          onChange={(e) => setService(e.target.value)}
        />
        <Form.Check
          inline
          label="Drop-In Visitsing"
          type="radio"
          value="Drop-InVisitsing"
          name="service"
          onChange={(e) => setService(e.target.value)}
        />
      </>
    );
  };

  const handler = (e) => {
    setYes(e.target.value);
  };

  return (
    <>
      <div className="row">
        <div className="col-1-of-2">
          <Form className="search-box">
            <Row className="mt-5">
              <Col className="mt-3">
                <h2>I'm looking for a service for my:</h2>
                <Form.Check
                  inline
                  label="Dog"
                  type="radio"
                  name="catOrDog"
                  value="Dog"
                  onChange={(e) => setRadio(e.target.value)}
                />
                <Form.Check
                  inline
                  label="Cat"
                  type="radio"
                  name="catOrDog"
                  value="Cat"
                  onChange={(e) => setRadio(e.target.value)}
                />
              </Col>
            </Row>
            <Row className="mt-5">
              <Col>
                <h2>What service do you need?</h2>
                {radio === "Cat" ? catSelected() : dogSelected()}
              </Col>
            </Row>

            <Row className="mt-5">
              <Col>
                <h2>My Dog Size kgs</h2>
                <Form.Check
                  inline
                  label="Small(0-7)"
                  type="radio"
                  name="size"
                  value="Small"
                  onChange={(e) => setSize(e.target.value)}
                />
                <Form.Check
                  inline
                  label="Medium(7-18)"
                  type="radio"
                  name="size"
                  value="Medium"
                  onChange={(e) => setSize(e.target.value)}
                />
                <Form.Check
                  inline
                  label="Large(18-45)"
                  type="radio"
                  name="size"
                  value="Large"
                  onChange={(e) => setRadio(e.target.value)}
                />
                <Form.Check
                  inline
                  label="Gaint(45+)"
                  type="radio"
                  name="size"
                  value="Gaint"
                  onChange={(e) => setRadio(e.target.value)}
                />
              </Col>
            </Row>
            <Row className="mt-5">
              <Col>
                <Form.Group controlId="formGridAddress">
                  <Form.Label>
                    <h2>Near</h2>
                  </Form.Label>
                  <Form.Control
                    type="address"
                    ref={autoCompleteRef}
                    onChange={(event) => setQuery(event.target.value)}
                    value={query}
                  />
                </Form.Group>
              </Col>
            </Row>
            <Button value="true" onClick={handler}>
              Search
            </Button>
          </Form>
        </div>
        <div className="col-1-of-2">
          <div className="composition">
            <img
              src="https://res.cloudinary.com/dsuvhhlxm/image/upload/v1596449129/pet_image/one_dazjjf.jpg "
              width="200"
              height="200"
              alt="Photo 1"
              className="composition__photo composition__photo--p1"
            />
            <img
              src="https://res.cloudinary.com/dsuvhhlxm/image/upload/v1596449434/pet_image/two_ekx35r.jpg"
              width="200"
              height="200"
              alt="Photo 2"
              className="composition__photo composition__photo--p2"
            />
            <img
              src="https://res.cloudinary.com/dsuvhhlxm/image/upload/v1596449506/pet_image/three_qagy0r.jpg"
              width="200"
              height="200"
              alt="Photo 3"
              className="composition__photo composition__photo--p3"
            />
          </div>
        </div>
      </div>

      <Container className="mt-5">
        {yes ? (
          <Container>
            {sitterList.map((sitter) => {
              return (
                <Sitter
                  key={sitter.id}
                  id={sitter.id}
                  full_name={sitter.full_name}
                  image={sitter.image}
                  street={sitter.address.street}
                  city={sitter.address.city}
                  country={sitter.address.country}
                  postcode={sitter.address.postcode}
                  service={sitter.service}
                  zoomLevel={14}
                />
              );
            })}
          </Container>
        ) : null}
        {yes ? (
          <div>
            <Map sitterList={sitterList} />
          </div>
        ) : null}
      </Container>
    </>
  );
}
