import React, { useState, useEffect } from "react";
import { Form, Button, Row, Col, Container, Image } from "react-bootstrap";
import { selectUser } from "../../store/user/selectors";
import { useSelector, useDispatch } from "react-redux";
import { sendEmail } from "../../store/userById/actions";
import { useParams } from "react-router-dom";
import { userById } from "../../store/userById/actions";
import { selectUserById } from "../../store/userById/selectors";
import { getpets } from "../../store/userDetails/actions";
import { selectpets } from "../../store/userDetails/selectors";

export default function Contact() {
  const dispatch = useDispatch();
  const { id } = useParams();
  const sitterId = id;
  const user = useSelector(selectUser);
  const [message, setMessage] = useState();
  const [selectedservice, set_service] = useState();
  const [date, setDate] = useState();
  const [enddate, setEndDate] = useState();
  const [time, setTime] = useState();
  const [pet, setPet] = useState();
  const userId = user.id;
  const userbyid = useSelector(selectUserById);
  const service = userbyid.service ? userbyid.service : {};
  const p = useSelector(selectpets);
  const pets = p ? p : [];

  useEffect(() => {
    dispatch(userById(id));
    dispatch(getpets());
  }, [dispatch, id]);

  const handler = () => {
    dispatch(
      sendEmail(
        message,
        userId,
        sitterId,
        time,
        date,
        enddate,
        selectedservice,
        pet
      )
    );
  };
  return (
    <div>
      <h1 className="headercontact">Contact Form</h1>
      <Container className="form">
        <Row>
          <Col>
            {userbyid.petSitter ? (
              <Form className="mt-5 mb-3">
                <Row>
                  {" "}
                  <Form.Group>
                    <Form.Label>
                      <h3>Service</h3>
                    </Form.Label>
                    <Form.Control
                      as="select"
                      multiple
                      onChange={(e) => set_service(e.target.value)}
                    >
                      <option>{service.boarding ? "Boarding" : null}</option>
                      <option>
                        {service.dogWalking ? "Dog Walking" : null}
                      </option>
                      <option>
                        {service.doggyDayCare ? "Doggy Day Care" : null}
                      </option>
                      <option>
                        {service.dropInVisits ? "Drop-In Visits" : null}
                      </option>
                      <option>
                        {service.houseSitting ? "House Sitting" : null}
                      </option>
                    </Form.Control>
                  </Form.Group>
                </Row>
                <Row>
                  {selectedservice === "Boarding" ? (
                    <>
                      <Form.Group>
                        <Form.Label>
                          <h3> Start Date</h3>
                        </Form.Label>
                        <Form.Control
                          value={date}
                          onChange={(event) => setDate(event.target.value)}
                          type="date"
                          required
                        />
                      </Form.Group>
                      <Form.Group>
                        <Form.Label>
                          <h3> End Date</h3>
                        </Form.Label>
                        <Form.Control
                          value={enddate}
                          onChange={(event) => setEndDate(event.target.value)}
                          type="date"
                          required
                        />
                      </Form.Group>
                    </>
                  ) : (
                    <Form.Group>
                      <Form.Label>
                        <h3>Date</h3>
                      </Form.Label>
                      <Form.Control
                        value={date}
                        onChange={(event) => setDate(event.target.value)}
                        type="date"
                        required
                      />
                    </Form.Group>
                  )}
                </Row>
                <Row>
                  <Form.Group>
                    <Form.Label>
                      <h3>Time</h3>
                    </Form.Label>
                    <Form.Control
                      value={time}
                      onChange={(e) => setTime(e.target.value)}
                    ></Form.Control>
                  </Form.Group>
                </Row>
                <Row>
                  <Form.Group>
                    <Form.Label>
                      <h3>Message</h3>
                    </Form.Label>
                  </Form.Group>
                </Row>

                <Row>
                  <textarea
                    name="message"
                    rows="3"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                  ></textarea>
                </Row>
                <Row className="mt-3 mb-3">
                  <h3>select pet</h3>
                </Row>
                <Row>
                  {pets.map((pet, i) => {
                    return (
                      <div key={i}>
                        <Button
                          variant="outline-dark"
                          value={pet.name}
                          onClick={(e) => setPet(e.target.value)}
                        >
                          {pet.name}
                        </Button>
                        {""}
                      </div>
                    );
                  })}
                </Row>

                <br></br>
                <Button variant="outline-dark" onClick={handler}>
                  {" "}
                  Send
                </Button>
              </Form>
            ) : (
              <Form className="mt-5">
                <Row>
                  <h1>Send a message to the pet owner</h1>
                </Row>

                <Form.Group>
                  <Row>
                    <Form.Label>
                      <h3>Message</h3>
                    </Form.Label>
                  </Row>
                  <Row>
                    <textarea
                      name="message"
                      rows="3"
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                    ></textarea>
                  </Row>
                  <br></br>
                  <Button onClick={handler}> Send</Button>
                </Form.Group>
              </Form>
            )}
          </Col>
          <Col className="col-8">
            <Image
              className="contact-image"
              src="https://res.cloudinary.com/dsuvhhlxm/image/upload/v1597387606/pet_image/dogwithpeople_g6m85h.jpg"
              alt="cat-dog"
              width="600"
              height="800"
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
}
