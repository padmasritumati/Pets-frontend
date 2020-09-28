import React, { useEffect } from "react";
import { Card, Container, Row, Col, Image, Button } from "react-bootstrap";
import { selectUser } from "../../store/user/selectors";
import { useSelector, useDispatch } from "react-redux";
import { userById } from "../../store/userById/actions";
//import DisplayServices from "../../components/DisplayServices";
import { selectservice, selectpets } from "../../store/userDetails/selectors";
import { getservice, getpets } from "../../store/userDetails/actions";
//import Pets from "../../components/DisplayPets";
import "./dashboard.css";
import { Link } from "react-router-dom";

export default function Dashboard() {
  const user = useSelector(selectUser);
  const s = useSelector(selectservice);
  const p = useSelector(selectpets);
  const dispatch = useDispatch();
  const service = s ? s : {};
  const pets = p ? p : [];

  useEffect(() => {
    if (user.id) {
      dispatch(userById(user.id));
      dispatch(getservice());
      dispatch(getpets());
    }
  }, [dispatch, user.id]);

  return (
    <div>
      <h1 className="headerdashboard"> Dashboard</h1>
      <Container className="form">
        <Row>
          <Image src={user.image} width={171} height={180} roundedCircle />
          <Col md={{ span: 6, offset: 0.5 }}>
            <h1>{user.full_name}</h1>
            <p>Address: {user.address}</p>
            <p>Phone: {user.phone}</p>
            <p>Email: {user.email}</p>
            {user.petSitter ? (
              <p>You are registered as petsitter</p>
            ) : (
              <p>You are registered as petowner</p>
            )}
          </Col>
        </Row>
      </Container>
      <div class="container-fluid">
        <div class="row">
          <div class="col-lg-6">
            <Container>
              <h2 className="md-2" align="center">
                Services
              </h2>
              <Row className="service container-fluid">
                <Col>
                  {service.boarding ? <h3>Boarding</h3> : null}
                  {service.houseSitting ? <h3>House Sitting</h3> : null}
                  {service.dropInVisits ? <h3>Drop-In Visits</h3> : null}
                  {service.doggyDayCare ? <h3>Doggy Day Care</h3> : null}
                  {service.dogWalking ? <h3>Dog Walking</h3> : null}
                </Col>

                <Col>
                  {service.boarding ? <h3>{service.boardingRate}</h3> : null}
                  {service.houseSitting ? (
                    <h3> {service.houseSittingRate}</h3>
                  ) : null}
                  {service.dropInVisits ? (
                    <h3>{service.dropInVisitsRate}</h3>
                  ) : null}
                  {service.doggyDayCare ? (
                    <h3>{service.doggyDayCareRate}</h3>
                  ) : null}
                  {service.dogWalking ? (
                    <h3>{service.dogWalkingRate}</h3>
                  ) : null}
                </Col>
              </Row>
            </Container>{" "}
          </div>
          <div class="col-lg-6">Container Right</div>
        </div>
      </div>

      {/** {user.petSitter ? (
        <h1 className="headerservice"> services</h1>
      ) : (
        <h1 className="headerpets"> Pets</h1>
      )}

      <Container>
        {user.petSitter ? (
          <Row className="mt-5 mb-3">
            <DisplayServices
              boarding={service.boarding}
              houseSitting={service.houseSitting}
              dropInVisits={service.dropInVisits}
              doggyDayCare={service.doggyDayCare}
              dogWalking={service.dogWalking}
              boardingRate={service.boardingRate}
              houseSittingRate={service.houseSittingRate}
              dropInVisitsRate={service.dropInVisitsRate}
              doggyDayCareRate={service.doggyDayCareRate}
              dogWalkingRate={service.dogWalkingRate}
              small={service.small}
              medium={service.medium}
              large={service.large}
              gaint={service.gaint}
              cat={service.cat}
              full_name={user.full_name}
            />
          </Row>
        ) : null}
      </Container>

      <Container>
        {pets ? (
          <Row className="mt-5 mb-3">
            {pets.map((pet, i) => {
              return (
                <Col key={i}>
                  <Image
                    src={pet.image}
                    width={171}
                    height={180}
                    roundedCircle
                  />
                  <h2>
                    {pet.name}({pet.breed})
                  </h2>
                  <h5>
                    {" "}
                    {pet.ageInYears} years,{pet.ageInMonths} months old,
                    {pet.weight} kg.
                  </h5>
                </Col>
              );
            })}{" "}
          </Row>
        ) : null}
          </Container>**/}
    </div>
  );
}
