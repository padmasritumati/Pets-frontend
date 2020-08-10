import React, { useEffect } from "react";
import { Card, Container, Row, Col } from "react-bootstrap";
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
import "./dashboard.css"

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
        <Row className="mt-5 mb-3">
          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src={user.image}  />
            <Card.Body>
              <Card.Title>{user.full_name}</Card.Title>
              <Card.Text>
                {address.street} {address.house_number} {address.city},
                {address.postcode}
              </Card.Text>
            </Card.Body>
          </Card>
        </Row>
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

        {pets ? (
          <Row className="mt-5 mb-3">
            {pets.map((pet, i) => {
              return (
                <Col key={i}>
                  <Card style={{ width: "18rem" }}>
                    <Card.Img variant="top" src={pet.image} />
                    <Card.Body>
                      <Card.Title>
                        {pet.name}
                        <br></br>
                        {pet.breed}
                      </Card.Title>
                      <Card.Text>
                        {pet.ageInYears} years,{pet.ageInMonths} months old,
                        {pet.weight} kg.
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
              );
            })}{" "}
          </Row>
        ) : null}
      </Container>
    </div>
  );
}
