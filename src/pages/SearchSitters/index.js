import React, { useEffect, useState, useRef } from "react";
import { getServices } from "../../store/searchSitter/actions";
import { selectSitterList } from "../../store/searchSitter/selectors";
import { useDispatch, useSelector } from "react-redux";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import Geocode from "react-geocode";
import Map from "../../components/Map";
import Sitter from "./Sitter";
import "./search.css";
import { apiKeyGoogle } from "../../config/constants";
import { showMessageWithTimeout } from "../../store/appState/actions";

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
  const [yes, setYes] = useState();
  const [type, setType] = useState();
  const [size, setSize] = useState();
  const [service, setService] = useState();
  const [query, setQuery] = useState();
  const [latitude, setLatitude] = useState("");
  const [longitude, setLongitude] = useState("");
  const autoCompleteRef = useRef(null);
  const location = { lat: latitude, log: longitude };

  useEffect(() => {
    loadScript(
      `https://maps.googleapis.com/maps/api/js?key=${apiKeyGoogle}&libraries=places&language=en`,
      () => handleScriptLoad(setQuery, autoCompleteRef)
    );
  }, []);

  Geocode.setApiKey(apiKeyGoogle);
  Geocode.setRegion("nl");

  const searchHandler = () => {
    if (!query && !type && !service) {
      dispatch(
        showMessageWithTimeout("danger", true, "Please enter all fields")
      );
    } else {
      setYes(true);
      Geocode.fromAddress(query).then(
        (response) => {
          const { lat, lng } = response.results[0].geometry.location;
          setLatitude(lat);
          setLongitude(lng);
          //console.log("inside handler", type, service, size, lat, lng);
          dispatch(getServices(type, service, size, lat, lng));
        },
        (error) => {
          console.error(error);
          dispatch(
            showMessageWithTimeout(
              "danger",
              true,
              "Sorry, we could not find the address"
            )
          );
        }
      );
    }
  };

  return (
    <div>
      <div className="searchPage">
        <h1 className="headerdashboard">Search for the Pet Sitters</h1>
        <Container className="searchbar mt-5">
          <Form.Row>
            <Col>
              <Form.Group as={Col} controlId="type">
                <Form.Label className="label-text">Type</Form.Label>
                <Form.Control
                  as="select"
                  onChange={(e) => {
                    setType(e.target.value);
                  }}
                >
                  <option>Dog</option>
                  <option>Cat</option>
                </Form.Control>
              </Form.Group>
            </Col>
            <Col>
              <Form.Group as={Col} controlId="service">
                <Form.Label className="label-text">Service</Form.Label>
                <Form.Control
                  as="select"
                  onChange={(e) => {
                    setService(e.target.value);
                  }}
                >
                  {type === "Cat" ? (
                    <>
                      <option>Boarding</option>
                      <option>House Sitting</option>
                      <option>Drop-In Visits</option>
                    </>
                  ) : (
                    <>
                      <option>Boarding</option>
                      <option>House Sitting</option>
                      <option>Drop-In Visits</option>
                      <option>Doggy Day Care</option>
                      <option>Dog Walking</option>
                    </>
                  )}
                </Form.Control>
              </Form.Group>
            </Col>
            {type === "Cat" ? null : (
              <>
                {" "}
                <Col>
                  <Form.Group as={Col} controlId="size">
                    <Form.Label className="label-text">Size</Form.Label>
                    <Form.Control
                      as="select"
                      onChange={(e) => {
                        setSize(e.target.value);
                      }}
                    >
                      <option>Small(0-7)kg</option>
                      <option>Medium(7-18)kg</option>
                      <option>Large(18-45)kg</option>
                      <option>Gaint(45+)kg</option>
                    </Form.Control>
                  </Form.Group>
                </Col>
              </>
            )}
            <Col>
              <Form.Group controlId="near">
                <Form.Label className="label-text">Near</Form.Label>
                <Form.Control
                  type="address"
                  ref={autoCompleteRef}
                  onChange={(event) => setQuery(event.target.value)}
                  defaultValue={query}
                />
              </Form.Group>
            </Col>
            <Col>
              <Button
                variant="outline-dark"
                type="submit"
                className="button-search"
                onClick={searchHandler}
              >
                <img src="https://img.icons8.com/fluent-systems-filled/20/000000/search.png" alt="search icon"/>
                Search
              </Button>
            </Col>{" "}
          </Form.Row>
        </Container>

        <div className="mt-5 mapdisplay">
          {yes ? (
            <Container>
            <Row >
              <Col className="service">
                {sitterList.map((sitter,i) => {
                  console.log(sitter, "from sitter");
                  return (
                    <Sitter
                      key={i}
                      id={sitter.user.id}
                      address={sitter.user.address}
                      name={sitter.user.full_name}
                      image={sitter.user.image}
                    />
                  );
                })}
              </Col>
              <Col className="col-9 service">
                {latitude ? (
                  <div>
                    <Map sitterList={sitterList} location={location} />
                  </div>
                ) : null}
              </Col>
            </Row>
            </Container>
          ) : null}
        </div>
      </div>
    </div>
  );
}
