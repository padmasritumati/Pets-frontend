import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import { address } from "../../store/userDetails/actions";
import { useDispatch } from "react-redux";

export default function BecomeSitter() {
  const [house, set_house] = useState();
  const [street, set_street] = useState();
  const [city, set_city] = useState();
  const [country, set_country] = useState();
  const [postcode, set_postcode] = useState();
  const dispatch = useDispatch();

  const handler = () => {
    dispatch(address(house, street, city, postcode,country));
  };

  return (
    <div className="form">
      <Form as={Col} md={{ span: 6, offset: 3 }} className="mt-5">
        <h1 className="mt-5 mb-5">Let's get started :)</h1>
        <Form.Group controlId="formGridAddress1">
          <Form.Label>House number</Form.Label>
          <Form.Control onChange={(e) => set_house(e.target.value)} />
        </Form.Group>

        <Form.Group controlId="formGridAddress2">
          <Form.Label>street</Form.Label>
          <Form.Control onChange={(e) => set_street(e.target.value)} />
        </Form.Group>

        <Form.Row>
          <Form.Group as={Col} controlId="formGridCity">
            <Form.Label>City</Form.Label>
            <Form.Control onChange={(e) => set_city(e.target.value)} />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridZip">
            <Form.Label>postcode</Form.Label>
            <Form.Control onChange={(e) => set_postcode(e.target.value)} />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridState">
            <Form.Label>Country</Form.Label>
            <Form.Control
              onChange={(e) => set_country(e.target.value)}
            ></Form.Control>
          </Form.Group>
        </Form.Row>

        <Link to="/phone">
          {" "}
          <Button  className="btn"  onClick={handler}>
            Submit
          </Button>
        </Link>
      </Form>
    </div>
  );
}
