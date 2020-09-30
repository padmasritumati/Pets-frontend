import React, { useEffect, useState } from "react";
import {
  Container,
  Button,
  Form,
  Row,
  Col,
  Image,
  CardColumns,
} from "react-bootstrap";
import { selectUser } from "../../store/user/selectors";
import { useSelector, useDispatch } from "react-redux";
import { userById } from "../../store/userById/actions";
import { selectservice, selectpets } from "../../store/userDetails/selectors";
import { getservice, getpets } from "../../store/userDetails/actions";
import "./dashboard.css";
import DisplayPets from "../../components/DisplayPets";

export default function Dashboard() {
  const user = useSelector(selectUser);
  const s = useSelector(selectservice);
  const p = useSelector(selectpets);
  const dispatch = useDispatch();

  const service = s ? s : {};
  const pets = p ? p : [];

  console.log("pets", pets);

  useEffect(() => {
    if (user.id) {
      dispatch(userById(user.id));
    }
    if (user.petSitter) {
      dispatch(getservice());
    }
    if (user.petOwner) {
      dispatch(getpets());
    }
  }, [dispatch, user.id]);

  return (
    <div className="main">
      <h1 className="headerdashboard"> Dashboard</h1>

      <Container
        className="form detailsContainer mt-5"
        as={Col}
        md={{ span: 10, offset: 1 }}
      >
        <Form.Row className="justify-content-md-center">
          <Col xs lg="3">
            <Image src={user.image} width={171} height={180} roundedCircle />
          </Col>
          <Col xs lg="4">
            <h1>{user.full_name}</h1>
            <Form.Row>
              <Col>
                <p>Address: {user.address}</p>
                <p>Phone: {user.phone}</p> <p>Email: {user.email}</p>
                {user.petSitter ? (
                  <p>You are registered as petsitter</p>
                ) : (
                  <p>You are registered as petowner</p>
                )}
              </Col>
            </Form.Row>
          </Col>
        </Form.Row>
      </Container>

      {user.petSitter ? (
        <Container
          as={Col}
          md={{ span: 10, offset: 1 }}
          className="mt-5 mb-5 "
          fluid
          align="center"
        >
          <Row>
            <Col>
              <Container className="service">
                <h1>Services</h1>
                <Row>
                  <Col>
                    {service.boarding ? <h3>Boarding</h3> : null}
                    {service.houseSitting ? <h3>House Sitting</h3> : null}
                    {service.dropInVisits ? <h3>Drop-In Visits</h3> : null}
                    {service.doggyDayCare ? <h3>Doggy Day Care</h3> : null}
                    {service.dogWalking ? <h3>Dog Walking</h3> : null}
                  </Col>

                  <Col>
                    {service.boarding ? <h3>€{service.boardingRate}</h3> : null}
                    {service.houseSitting ? (
                      <h3> €{service.houseSittingRate}</h3>
                    ) : null}
                    {service.dropInVisits ? (
                      <h3>€{service.dropInVisitsRate}</h3>
                    ) : null}
                    {service.doggyDayCare ? (
                      <h3>€{service.doggyDayCareRate}</h3>
                    ) : null}
                    {service.dogWalking ? (
                      <h3>€{service.dogWalkingRate}</h3>
                    ) : null}
                  </Col>
                </Row>
              </Container>
            </Col>
            <Col>
              <Container className="service">
                <h2 className="mb-2">Type of pet</h2>
                <Form.Row className="justify-content-md-center mt-3 ">
                  <Col xs lg="2">
                    <h4>Dog</h4>
                  </Col>
                  <Col xs lg="2">
                    {service.cat ? <h4> Cat</h4> : null}
                  </Col>
                </Form.Row>
                <h2 className="mt-3 mb-2">Size of Dog </h2>
                <Form.Row className="justify-content-md-center mt-3 ">
                  <Col xs lg="3">
                    {service.small ? <h4>Small</h4> : null}
                    {service.medium ? <h4>Medium</h4> : null}
                  </Col>
                  <Col xs lg="3">
                    {service.large ? <h4>Large</h4> : null}
                    {service.gaint ? <h4>Gaint</h4> : null}
                  </Col>
                </Form.Row>
              </Container>
            </Col>
          </Row>
        </Container>
      ) : null}

      <Container className="mt-5">
        <CardColumns>
          {pets
            ? pets.map((pet, i) => {
                return (
                  <DisplayPets
                    key={i}
                    id={pet.id}
                    name={pet.name}
                    ageInYears={pet.ageInYears}
                    ageInMonths={pet.ageInMonths}
                    breed={pet.breed}
                    image={pet.image}
                    weight={pet.weight}
                    sex={pet.sex}
                    type={pet.type}
                  ></DisplayPets>
                );
              })
            : null}
        </CardColumns>
      </Container>
    </div>
  );
}
