import React, { useEffect } from "react";
import { Card, Container, Row } from "react-bootstrap";
import { selectUser } from "../../store/user/selectors";
import { useSelector, useDispatch } from "react-redux";
import { userById } from "../../store/userById/actions";
import { selectUserAddress,selectUserServices } from "../../store/userById/selectors";
import DisplayServices from "../../components/DisplayServices"


export default function Dashboard() {
  const user = useSelector(selectUser);
  const a = useSelector(selectUserAddress);
  const s=useSelector(selectUserServices);
  const dispatch = useDispatch();
  const address = a ? a : {};
  const service = s ? s : {}; 
 // const pet=p?p:[];

  useEffect(() => {
    if (user.id) {
      dispatch(userById(user.id));
    }
  }, [dispatch, user.id]);

  return (
    <div>
      <Container>
        <Row className="mt-5 mb-3">
          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src={user.image} />
            <Card.Body>
              <Card.Title>{user.full_name}</Card.Title>
              <Card.Text>
                {address.street} {address.house_number} {address.city},
                {address.postcode}
              </Card.Text>
            </Card.Body>
          </Card>
        </Row>
        {user.petSitter?(<Row className="mt-5 mb-3">
          <Card>
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
            full_name={user.full_name}/>
          </Card>
        </Row>):null}
        
      </Container>
    </div>
  );
}
