import React, { useState } from "react";
import { Container, Col, Form, Row, Button } from "react-bootstrap";
import { setServices, becomeSitter } from "../../store/becomeSitter/actions";
import { useDispatch, useSelector } from "react-redux";
import { selectBecomeSitter } from "../../store/becomeSitter/selectors";

export default function Services() {
  const [boarding, set_Boarding] = useState("off");
  const [boardingRate, set_BoardingRate] = useState("20");
  const [houseSitting, set_HouseSitting] = useState("off");
  const [houseSittingRate, set_HouseSittingRate] = useState("20");
  const [dropInVisits, set_DropInVisits] = useState("off");
  const [dropInVisitsRate, set_DropInVisitsRate] = useState("10");
  const [doggyDayCare, set_DoggyDayCare] = useState("off");
  const [doggyDayCareRate, set_DoggyDayCareRate] = useState("17");
  const [dogWalking, set_DogWalking] = useState("off");
  const [dogWalkingRate, set_DogWalkingRate] = useState("10");
  const [small, set_Small] = useState("off");
  const [medium, set_Medium] = useState("off");
  const [large, set_Large] = useState("off");
  const [gaint, set_Gaint] = useState("off");
  const [cat, set_Cat] = useState("false");
  const dispatch = useDispatch();
  const sitter = useSelector(selectBecomeSitter);

  const services = [
    {
      service: {
        boarding: boarding,
        houseSitting: houseSitting,
        dropInVisits: dropInVisits,
        doggyDayCare: doggyDayCare,
        dogWalking: dogWalking,
      },
      rates: {
        boardingRate: boardingRate,
        houseSittingRate: houseSittingRate,
        dropInVisitsRate: dropInVisitsRate,
        doggyDayCareRate: doggyDayCareRate,
        dogWalkingRate: dogWalkingRate,
      },
      size: {
        samll: small,
        medium: medium,
        large: large,
        gaint: gaint,
      },

      cat: cat,
    },
  ];
  const handler = () => {
    dispatch(setServices(services));
  };

  const confirmHandler = () => {
    dispatch(becomeSitter(sitter));
  };

  return (
    <Container as={Col} md={{ span: 6, offset: 3 }} className="mt-5">
      <h2>Which services would you like to offer?</h2>
      <Row className="mt-5">
        <Col>
          <h3>Boarding</h3>
          <p>The owner's pets come to your home and stay overnight.</p>
          <Form.Group as={Col} controlId="formGridRate">
            <Form.Label>Rate</Form.Label>
            <Form.Control
              type="number"
              min="15"
              max="100"
              defaultValue="20"
              onChange={(e) => set_BoardingRate(e.target.value)}
            />
          </Form.Group>
        </Col>
        <Form>
          <Form.Check
            type="switch"
            id="custom-switch-boarding"
            label=""
            onChange={(e) => set_Boarding(e.target.value)}
          />
        </Form>
      </Row>

      <Row className="mt-5">
        <Col>
          <h3>House Sitting</h3>
          <p>
            You go to the pet owner's home and stay overnight, taking care of
            their dogs and home.
          </p>
          <Form.Group as={Col} controlId="formGridRate">
            <Form.Label>Rate</Form.Label>
            <Form.Control
              type="number"
              min="15"
              max="100"
              defaultValue="20"
              onChange={(e) => set_HouseSittingRate(e.target.value)}
            />
          </Form.Group>
        </Col>
        <Form>
          <Form.Check
            type="switch"
            id="custom-switch-house"
            label=""
            onChange={(e) => set_HouseSitting(e.target.value)}
          />
        </Form>
      </Row>

      <Row className="mt-5">
        <Col>
          <h3>Drop-In Visits</h3>
          <p>
            Pet Owners ask you to do home visits to feed and play with their
            pets.
          </p>
          <Form.Group as={Col} controlId="formGridRate">
            <Form.Label>Rate</Form.Label>
            <Form.Control
              type="number"
              min="8"
              max="50"
              defaultValue="10"
              onChange={(e) => set_DropInVisitsRate(e.target.value)}
            />
          </Form.Group>
        </Col>
        <Form>
          <Form.Check
            type="switch"
            id="custom-switch-dropin"
            label=""
            onChange={(e) => set_DropInVisits(e.target.value)}
          />
        </Form>
      </Row>

      <Row className="mt-5">
        <Col>
          <h3>Doggy Day Care</h3>
          <p>he owner's pets stay at your home during the day</p>
          <Form.Group as={Col} controlId="formGridRate">
            <Form.Label>Rate</Form.Label>
            <Form.Control
              type="number"
              min="15"
              max="100"
              defaultValue="17"
              onChange={(e) => set_DoggyDayCareRate(e.target.value)}
            />
          </Form.Group>
        </Col>
        <Form>
          <Form.Check
            type="switch"
            id="custom-switch-doggy"
            label=""
            onChange={(e) => set_DoggyDayCare(e.target.value)}
          />
        </Form>
      </Row>

      <Row className="mt-5">
        <Col>
          <h3>Dog Walking</h3>
          <p>Pet Owners request dog walks in their neighbourhood.</p>
          <Form.Group as={Col} controlId="formGridRate">
            <Form.Label>Rate</Form.Label>
            <Form.Control
              type="number"
              min="8"
              max="50"
              defaultValue="10"
              onChange={(e) => set_DogWalkingRate(e.target.value)}
            />
          </Form.Group>
        </Col>
        <Form>
          <Form.Check
            type="switch"
            id="custom-switch-walking"
            label=""
            onChange={(e) => set_DogWalking(e.target.value)}
          />
        </Form>
      </Row>

      <Row className="mt-5">
        <h2>What size dogs do you accept?</h2>
        <Col>
          <Form.Check
            type="checkbox"
            id="custom-switch-small"
            label="Small(0-7kg)"
            onChange={(e) => set_Small(e.target.value)}
          />
          <Form.Check
            type="checkbox"
            id="custom-switch-Medium"
            label="Medium(7-18kg)"
            onChange={(e) => set_Medium(e.target.value)}
          />
          <Form.Check
            type="checkbox"
            id="custom-switch-large"
            label="Large(18-45kg)"
            onChange={(e) => set_Large(e.target.value)}
          />
          <Form.Check
            type="checkbox"
            id="custom-switch-Gaint"
            label="Gaint(45kg +)"
            onChange={(e) => set_Gaint(e.target.value)}
          />
        </Col>
      </Row>

      <Row className="mt-5">
        <h2>Do you accept cats?</h2>
        <Col>
          <>
            <Button
              variant="outline-primary"
              value="true"
              onClick={(e) => set_Cat("true")}
            >
              Yes
            </Button>{" "}
            <Button variant="outline-primary" value="false">
              No
            </Button>{" "}
          </>
        </Col>
      </Row>
      <Row>
        <Col>
          <Button type="submit" className="mt-5" onClick={handler}>
            Submit
          </Button>
        </Col>
        <Col>
          <Button className="mt-5 mb-3" type="submit" onClick={confirmHandler}>
            {" "}
            Confirm to become a sitter
          </Button>
        </Col>{" "}
      </Row>
    </Container>
  );
}
