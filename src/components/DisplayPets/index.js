import React, { useState } from "react";
import { Card, Form, Button, Col } from "react-bootstrap";
import "./DisplayPets.css";
import { selectToken } from "../../store/user/selectors";
import { useSelector } from "react-redux";
import MydModalWithGrid from "./Edit";
import DeletePet from "./DeletePet";

export default function DisplayPets(props) {
  const [modalShow, setModalShow] = useState(false);
  const token = useSelector(selectToken);


  return (
    <>
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
                <strong>Age:</strong> {props.ageInYears}years,
                {props.ageInMonths}
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
          <Form.Row className="justify-content-md-center mt-3">
            <Col xs lg="4">
              {token ? (
                <>
                  <Button
                    variant="outline-dark"
                    onClick={() => setModalShow(true)}
                  >
                    Edit
                  </Button>
                  <MydModalWithGrid
                    id={props.id}
                    name={props.name}
                    breed={props.breed}
                    ageinyears={props.ageInYears}
                    ageinmonths={props.ageInMonths}
                    weight={props.weight}
                    sex={props.sex}
                    show={modalShow}
                    onHide={() => setModalShow(false)}
                  />
                </>
              ) : null}
            </Col>
            <Col xs lg="4">
              {" "}
              <DeletePet id={props.id}></DeletePet>
            </Col>
          </Form.Row>
        </Card.Body>
      </Card>
    </>
  );
}
