import React, { useEffect } from "react";
import { Card, Container, Row, Col, Image } from "react-bootstrap";
import { selectUser } from "../../store/user/selectors";
import { useSelector, useDispatch } from "react-redux";
import { userById } from "../../store/userById/actions";
import DisplayServices from "../../components/DisplayServices";
import {
  selectAddresss,
  selectservice,
  selectpets,
} from "../../store/userDetails/selectors";
import {
  getaddress,
  getservice,
  getpets,
} from "../../store/userDetails/actions";
//import Pets from "../../components/DisplayPets";
import "./dashboard.css";

export default function Dashboard() {
  const user = useSelector(selectUser);
  const a = useSelector(selectAddresss);
  const s = useSelector(selectservice);
  const p = useSelector(selectpets);
  const dispatch = useDispatch();
  const address = a ? a : {};
  const service = s ? s : {};
  const pets = p ? p : [];

  console.log("pets", pets);

  useEffect(() => {
    if (user.id) {
      dispatch(userById(user.id));
      dispatch(getaddress());
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
          <Col>
            <h1>{user.full_name}</h1>
            <h3>
              {" "}
              {address.street} {address.house_number} {address.city},
              {address.postcode}
            </h3>
          </Col>
        </Row>
      </Container>
      {user.petSitter ? (
        <h1 className="headerdashboard"> services</h1>
      ) : (
        <h1 className="headerdashboard"> Pets</h1>
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
      </Container>
    </div>
  );
}
