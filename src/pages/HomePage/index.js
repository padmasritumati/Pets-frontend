import React, { useState } from "react";
import { Container, Button, Form, Row, Col } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import Geocode from "react-geocode";
import "./homepage.css";
import { selectToken, selectUser } from "../../store/user/selectors";

let autoComplete;

export default function HomePage() {
  const token = useSelector(selectToken);
  const user = useSelector(selectUser);

  const [radio, setRadio] = useState();
  const [size, setSize] = useState();
  const [service, setService] = useState();
  const [Address, setAddress] = useState();

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
  return (
    <div>
      <header className="header">
        <div className="text-box">
          {" "}
          <h1 className="heading-primary">
            <span className="heading-primary-main">We’re The Dog People</span>
            <span className="heading-primary-sub">Enjoy our services</span>
          </h1>
          <a href="#" className="btn">Our Service</a>
        </div>
      </header>
      <Container as={Col} md={{ span: 6, offset: 3 }} className="mt-5">
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
                <Form.Control onChange={(e) => e.target.value} />
              </Form.Group>
            </Col>
          </Row>
        </Form>
      </Container>
    </div>
  );
}
