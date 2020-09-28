
import React, { useState } from "react";
import { Container, Col, Form, Row, Button } from "react-bootstrap";
import { service } from "../../store/userDetails/actions";
import { useDispatch } from "react-redux";

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

  const services = {
    boarding: boarding,
    houseSitting: houseSitting,
    dropInVisits: dropInVisits,
    doggyDayCare: doggyDayCare,
    dogWalking: dogWalking,

    boardingRate: boardingRate,
    houseSittingRate: houseSittingRate,
    dropInVisitsRate: dropInVisitsRate,
    doggyDayCareRate: doggyDayCareRate,
    dogWalkingRate: dogWalkingRate,

    samll: small,
    medium: medium,
    large: large,
    gaint: gaint,

    cat: cat,
  };

  const handler = () => {
    console.log("services", services);
    dispatch(service(services));
  };

  return (
    <Container as={Col} md={{ span: 6, offset: 3 }} className="mt-5 form">
      <h2>Which services would you like to offer?</h2>
      <Row className="mt-5">
        <Col>
          <h3>
            {" "}
            <i class="fas fa-luggage-cart"></i> Boarding
          </h3>
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
          <h3>
            <i class="fas fa-house-user"></i> House Sitting
          </h3>
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
          <h3>
            <i class="fas fa-door-open"></i> Drop-In Visits
          </h3>
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
          <h3>
            <i class="fas fa-sun"></i> Doggy Day Care
          </h3>
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
          <h3>
            <i class="fas fa-paw"></i> Dog Walking
          </h3>
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
        <Row>
          <Col>
            <Form.Check
              type="checkbox"
              id="custom-switch-small"
              label="Small(0-7kg)"
              onChange={(e) => set_Small(e.target.value)}
            ></Form.Check>
          </Col>
          <Col>
            <Form.Check
              type="checkbox"
              id="custom-switch-Medium"
              label="Medium(7-18kg)"
              onChange={(e) => set_Medium(e.target.value)}
            />
          </Col>
          <Col>
            {" "}
            <Form.Check
              type="checkbox"
              id="custom-switch-large"
              label="Large(18-45kg)"
              onChange={(e) => set_Large(e.target.value)}
            />
          </Col>

          <Col>
            {" "}
            <Form.Check
              type="checkbox"
              id="custom-switch-Gaint"
              label="Gaint(45kg +)"
              onChange={(e) => set_Gaint(e.target.value)}
            />
          </Col>
        </Row>
      </Row>

      <Row className="mt-5">
        <h2>
          Do you accept cats<i class="fas fa-cat"></i>?
        </h2><br></br>
        <Row>
          <Col>
            <Button
              variant="outline-dark"
              value="true"
              onClick={(e) => set_Cat("true")}
            >
              Yes
            </Button>
          </Col>{" "}
          <Col>
            <Button variant="outline-dark" value="false">
              No
            </Button>{" "}
          </Col>
        </Row>
      </Row>
      <Row>
        <Col>
          <Button type="submit" variant="outline-dark" className="mt-5" onClick={handler}>
            Submit
          </Button>
        </Col>
      </Row>
    </Container>
  );
}
