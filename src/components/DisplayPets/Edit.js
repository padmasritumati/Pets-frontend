import React, { useState } from "react";
import { Button, Modal, Form, Container, Col } from "react-bootstrap";
import { useDispatch } from "react-redux";
import {updatePet} from "../../store/userDetails/actions"

export default function MydModalWithGrid(props) {
  const [name, setName] = useState();
  const [weight, setWeigth] = useState();
  const [breed, setBreed] = useState();
  const [ageInYears, setAgeInYears] = useState();
  const [ageInMonths, setAgeInMonths] = useState();
  const [sex, setSex] = useState();
  const dispatch =useDispatch()
  const id=props.id;
  const handlerUpdate=()=>{
   
    dispatch(updatePet(id,name,weight,breed,ageInMonths,ageInYears,sex))
  }

  return (
    <Modal {...props} aria-labelledby="contained-modal-title-vcenter">
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Edit your Pet details
        </Modal.Title>
      </Modal.Header>
      <Modal.Body className="show-grid">
        <Container className="mt-2 mb-3 form">
          <Form.Row>
            <Col>
              <Form.Group controlId="petName">
                <Form.Label>Name</Form.Label>
                <Form.Control
                  defaultValue={props.name}
                  onChange={(e) => setName(e.target.value)}
                />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group controlId="petWeight">
                <Form.Label>Weight(Kg)</Form.Label>
                <Form.Control
                  defaultValue={props.weight}
                  type="number"
                  onChange={(e) => setWeigth(e.target.value)}
                />
              </Form.Group>
            </Col>
          </Form.Row>
          <Form.Row>
            <Col>
              <Form.Group controlId="petAge(years)">
                <Form.Label>Age(years)</Form.Label>
                <Form.Control
                  defaultValue={props.ageinyears}
                  type="number"
                  onChange={(e) => setAgeInYears(e.target.value)}
                />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group controlId="petAge(months)">
                <Form.Label>Age(months)</Form.Label>
                <Form.Control
                  defaultValue={props.ageinmonths}
                  type="number"
                  onChange={(e) => setAgeInMonths(e.target.value)}
                />
              </Form.Group>
            </Col>
          </Form.Row>
          <Form.Row>
            <Col>
              <Form.Group controlId="petBreed">
                <Form.Label>Breed</Form.Label>
                <Form.Control
                  defaultValue={props.breed}
                  onChange={(e) => setBreed(e.target.value)}
                />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group controlId="petSex">
                <Form.Label>Sex</Form.Label>
                <Form.Control
                  defaultValue={props.sex}
                  onChange={(e) => setSex(e.target.value)}
                />
              </Form.Group>
            </Col>
          </Form.Row>
        </Container>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="outline-dark" onClick={props.onHide}>Close</Button>
       <Button variant="outline-dark" onClick={ handlerUpdate} >Save</Button>
     
      </Modal.Footer>
    </Modal>
  );
}
