import React, { useEffect } from "react";
import { Container, Row, Col, Image, CardColumns } from "react-bootstrap";
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

      {user.petSitter ? (
        <Container
          as={Col}
          md={{ span: 5, offset: 1 }}
          className="mt-5 mb-5 service"
          fluid
          align="center"
        >
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
              {service.dogWalking ? <h3>{service.dogWalkingRate}</h3> : null}
            </Col>
          </Row>
        </Container>
      ) : null}
      <Container>
        <CardColumns>
          {pets
            ? pets.map((pet, i) => {
                return (
                  <DisplayPets
                    key={i}
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
