import React, { useState, useEffect, useRef } from "react";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import { address } from "../../store/userDetails/actions";
import { useDispatch } from "react-redux";
import Geocode from "react-geocode";
import { apiKeyGoogle } from "../../config/constants";

var autoComplete;

export default function BecomeSitter() {
  const [house, set_house] = useState("");
  const [street, set_street] = useState("");
  const [city, set_city] = useState("");
  const [country, set_country] = useState("");
  const [postcode, set_postcode] = useState("");
  const [query, setQuery] = useState("");
  const autoCompleteRef = useRef(null);
  const dispatch = useDispatch();

  const loadScript = (url, callback) => {
    let script = document.createElement("script");
    script.type = "text/javascript";

    if (script.readyState) {
      script.onreadystatechange = function () {
        if (
          script.readyState === "loaded" ||
          script.readyState === "complete"
        ) {
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
    let address = addressObject.address_components;
    address.map((el) => {
      console.log("i", el.types);
      el.types.map((type) => {
        switch (type) {
          case "postal_code": {
            set_postcode(el.long_name);
            break
          }
          case "country": {
            set_country(el.long_name);
            break
          }
          case "locality": {
            set_city(el.long_name);
            break
          }
          case "street_number": {
            set_house(el.long_name);
            break
          }
          case "route": {
            set_street(el.long_name);
            break
          }
        }
      });
    });

    console.log(addressObject);
    console.log(address, "address");
    const query = addressObject.formatted_address;
    updateQuery(query);
  }

  const handler = () => {
    Geocode.fromAddress(query).then((response) => {
      const { lat, lng } = response.results[0].geometry.location;
      console.log("lat,lng", lat, lng);
    });
    dispatch(address(house, street, city, postcode, country));
  };

  useEffect(() => {
    loadScript(
      `https://maps.googleapis.com/maps/api/js?key=${apiKeyGoogle}&libraries=places&language=en`,
      () => handleScriptLoad(setQuery, autoCompleteRef)
    );
  }, []);

  Geocode.setApiKey(apiKeyGoogle);
  Geocode.setRegion("nl");

  return (
    <div className="form">
      <Form as={Col} md={{ span: 6, offset: 3 }} className="mt-5">
        <h1 className="mt-5 mb-5">Let's get started :)</h1>
        <Form.Group controlId="formGridAddress1">
          <Form.Label>Address</Form.Label>
          <Form.Control
            type="address"
            ref={autoCompleteRef}
            onChange={(event) => setQuery(event.target.value)}
            value={query}
            placeholder="Enter address"
          />
        </Form.Group>

        <Form.Group controlId="formGridAddress1">
          <Form.Label>House number</Form.Label>
          <Form.Control
            value={house}
            onChange={(e) => set_house(e.target.value)}
          />
        </Form.Group>
        <Form.Group controlId="formGridAddress2">
          <Form.Label>street</Form.Label>
          <Form.Control
            value={street}
            onChange={(e) => set_street(e.target.value)}
          />
        </Form.Group>
        <Form.Row>
          <Form.Group as={Col} controlId="formGridCity">
            <Form.Label>City</Form.Label>
            <Form.Control
              value={city}
              onChange={(e) => set_city(e.target.value)}
            />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridZip">
            <Form.Label>postcode</Form.Label>
            <Form.Control
              value={postcode}
              onChange={(e) => set_postcode(e.target.value)}
            />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridState">
            <Form.Label>Country</Form.Label>
            <Form.Control
              value={country}
              onChange={(e) => set_country(e.target.value)}
            ></Form.Control>
          </Form.Group>
        </Form.Row>
        <Link to="/phone">
          {" "}
          <Button className="btn" onClick={handler}>
            Submit
          </Button>
        </Link>
      </Form>
    </div>
  );
}
