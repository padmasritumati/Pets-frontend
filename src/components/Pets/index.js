import React, { useState } from "react";
import { Form, Col, Button, Row } from "react-bootstrap";
import {pet} from "../../store/userDetails/actions"
import { useDispatch } from "react-redux";

export default function Pets() {
  const [type, setType] = useState();
  const [name, setName] = useState();
  const [weight, setWeigth] = useState();
  const [breed, setBreed] = useState();
  const [ageInYears, setAgeInYears] = useState();
  const [ageInMonths, setAgeInMonths] = useState();
  const [sex, setSex] = useState();
  const dispatch=useDispatch();

  const handler = () => {
    console.log(type, name, weight, breed, ageInYears, ageInMonths, sex);
    dispatch(pet(type, name, weight, breed, ageInYears, ageInMonths, sex))
  };

  return (
    <div>
      <Form as={Col} md={{ span: 6, offset: 3 }} className="mt-5 mb-3">
        <h1>Tell us a bit about your pet</h1>
        <h3 className="mt-5 ">What type of pet?</h3>
        <Row className="mt-3">
          <Col>
            <>
              <Button
                variant="outline-primary"
                vlaue="dog"
                onClick={(e) => setType(e.target.value)}
              >
                Dog
              </Button>{" "}
              <Button
                variant="outline-primary"
                value="cat"
                onClick={(e) => setType(e.target.value)}
              >
                Cat
              </Button>{" "}
            </>
          </Col>
        </Row>
        <Row className="mt-5">
          <Col>
            <Form.Group controlId="petName">
              <Form.Label>Name</Form.Label>
              <Form.Control onChange={(e) => setName(e.target.value)} />
            </Form.Group>
          </Col>
          <Col>
            <Form.Group controlId="petWeight">
              <Form.Label>Weight(Kg)</Form.Label>
              <Form.Control
                type="number"
                onChange={(e) => setWeigth(e.target.value)}
              />
            </Form.Group>
          </Col>
        </Row>
        <Row>
          <Col>
            <Form.Group controlId="petBreed">
              <Form.Label>Breed</Form.Label>
              <Form.Control onChange={(e) => setBreed(e.target.value)} />
            </Form.Group>
          </Col>
        </Row>
        <Row>
          <Col>
            <Form.Group controlId="petAge(years)">
              <Form.Label>Age(years)</Form.Label>
              <Form.Control
                type="number"
                onChange={(e) => setAgeInYears(e.target.value)}
              />
            </Form.Group>
          </Col>
          <Col>
            <Form.Group controlId="petAge(months)">
              <Form.Label>Age(months)</Form.Label>
              <Form.Control
                type="number"
                onChange={(e) => setAgeInMonths(e.target.value)}
              />
            </Form.Group>
          </Col>
          <Col>
            <Form.Group controlId="petsex">
              <Form.Label>sex</Form.Label>
            </Form.Group>
            <Form.Check
              inline
              label="Male"
              type="radio"
              id="maleradio"
              value="male"
              onClick={(e) => setSex(e.target.value)}
            />
            <Form.Check
              inline
              label="Female"
              type="radio"
              id="femaleradio"
              value="female"
              onClick={(e) => setSex(e.target.value)}
            />
          </Col>
        </Row>
        <Button type="submit" onClick={handler}>
          Submit
        </Button>
      </Form>
    </div>
  );
}
