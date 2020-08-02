import React from "react";
import { Container, Row ,Card} from "react-bootstrap";

export default function Pets(name,breed,weight,ageInYears,ageInMonths,image) {
  return (
    <>
      <Container>
      <Row className="mt-5 mb-3">
      <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src={image} />
            <Card.Body>
  <Card.Title>{name}<br></br>{breed}</Card.Title>
              <Card.Text>
               {ageInYears} years,{ageInMonths} months old,{weight} kg.
              </Card.Text>
            </Card.Body>
          </Card>
          </Row>
      </Container>
    </>
  );
}
