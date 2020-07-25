import React from "react";
import { Container, Col, Form, Row,Button } from "react-bootstrap";

export default function Services() {
  return (
    <Container className="mt-5 mb-5">
      <h2>Which services would you like to offer?</h2>
      <Row className="mt-5 mb-5">
        <Col>
          <h3>Boarding</h3>
          <p>The owner's pets come to your home and stay overnight.</p>
          <Form.Group as={Col} controlId="formGridRate">
            <Form.Label>Rate</Form.Label>
            <Form.Control type="number" min="15" max="100" placeholder="20" />
          </Form.Group>
        </Col>
        <Form>
          <Form.Check type="switch" id="custom-switch-boarding" label="" />
        </Form>
      </Row>

      <Row className="mt-5 mb-5">
        <Col>
          <h3>House Sitting</h3>
          <p>
            You go to the pet owner's home and stay overnight, taking care of
            their dogs and home.
          </p>
          <Form.Group as={Col} controlId="formGridRate">
            <Form.Label>Rate</Form.Label>
            <Form.Control type="number" min="15" max="100" placeholder="20" />
          </Form.Group>
        </Col>
        <Form>
          <Form.Check type="switch" id="custom-switch-house" label="" />
        </Form>
      </Row>

      <Row className="mt-5 mb-5">
        <Col>
          <h3>Drop-In Visits</h3>
          <p>
            Pet Owners ask you to do home visits to feed and play with their
            pets.
          </p>
          <Form.Group as={Col} controlId="formGridRate">
            <Form.Label>Rate</Form.Label>
            <Form.Control type="number" min="8" max="50" placeholder="10" />
          </Form.Group>
        </Col>
        <Form>
          <Form.Check type="switch" id="custom-switch-dropin" label="" />
        </Form>
      </Row>

      <Row className="mt-5 mb-5">
        <Col>
          <h3>Doggy Day Care</h3>
          <p>he owner's pets stay at your home during the day</p>
          <Form.Group as={Col} controlId="formGridRate">
            <Form.Label>Rate</Form.Label>
            <Form.Control type="number" min="15" max="100" placeholder="17" />
          </Form.Group>
        </Col>
        <Form>
          <Form.Check type="switch" id="custom-switch-doggy" label="" />
        </Form>
      </Row>

      <Row className="mt-5 mb-5">
        <Col>
          <h3>Dog Walking</h3>
          <p>Pet Owners request dog walks in their neighbourhood.</p>
          <Form.Group as={Col} controlId="formGridRate">
            <Form.Label>Rate</Form.Label>
            <Form.Control type="number" min="8" max="50" placeholder="10" />
          </Form.Group>
        </Col>
        <Form>
          <Form.Check type="switch" id="custom-switch-walking" label="" />
        </Form>
      </Row>

      <h2>What size dogs do you accept?</h2>
      <Row className="mt-5 mb-5">
        <Form.Check
          type="checkbox"
          id="custom-switch-small"
          label="Small(0-7kg)"
        />
        <Form.Check
          type="checkbox"
          id="custom-switch-Medium"
          label="Medium(7-18kg)"
        />
        <Form.Check
          type="checkbox"
          id="custom-switch-large"
          label="Large(18-45kg)"
        />{" "}
        <Form.Check
          type="checkbox"
          id="custom-switch-Gaint"
          label="Gaint(45kg +)"
        />
      </Row>
      <h2>Do you accept cats?</h2>
      <Row className="mt-5 mb-5">
        <>
          <Button variant="outline-primary">Yes</Button>{' '}
          <Button variant="outline-primary">No</Button>{' '}
        </>
      </Row>
    </Container>
  );
}
