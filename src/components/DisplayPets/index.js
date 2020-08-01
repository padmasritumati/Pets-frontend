import React from "react";
import { Container, Row ,Card} from "react-bootstrap";

export default function Pets() {
  return (
    <>
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
      </Container>
    </>
  );
}
