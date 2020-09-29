import React from "react";
import { Container, Card, CardDeck, Form, Col } from "react-bootstrap";
import "./DisplayPets.css";

export default function DisplayPets(props) {
  return (
    <Card className="card-img-top" style={{ width: "18rem" }}>
      <Card.Img
        className="img"
        variant="top"
        src={props.image}
        width="100"
        height="200"
      />
      <Card.Body>
        <Card.Title>{props.name}</Card.Title>

        <Form.Row className="justify-content-md-center">
          <Col xs lg="6">
            <Card.Text>
              <strong>Type:</strong>
              {props.type}
              <br></br>
              <strong>Age:</strong> {props.ageInYears}years,{props.ageInMonths}
              months
              <br></br>
              <strong>weight:</strong>
              {props.weight}Kgs
              <br></br>
            </Card.Text>
          </Col>
          <Col xs lg="6">
            <Card.Text>
              <strong>Breed:</strong>
              {props.breed}
              <br></br>
              <strong>Sex:</strong>
              {props.sex}
            </Card.Text>
          </Col>
        </Form.Row>
      </Card.Body>
    </Card>
  );
}
