import React from "react";
import { Container, Row, Col } from "react-bootstrap";

export default function SitterById({
  boarding,
  houseSitting,
  dropInVisits,
  doggyDayCare,
  dogWalking,
  boardingRate,
  houseSittingRate,
  dropInVisitsRate,
  doggyDayCareRate,
  dogWalkingRate,
  small,
  medium,
  large,
  gaint,
  cat,
  full_name,
}) {
  return (
    <>
      <Container>
        <Row className="mt-5 mb-3">
          <h2>Services</h2>
        </Row>
        
          {boarding ? (
            <Row>
              <Col>
                <h3>Boarding</h3>
                <p>in the sitter's home</p>
              </Col>
              <Col>
                <h3>€{boardingRate}</h3>
                <p>per nigth</p>
              </Col>
            </Row>
          ) : (
            ""
          )}
        
        {houseSitting ? (
          <Row>
            <Col>
              <h3>House Sitting</h3>
              <p>in your home</p>
            </Col>
            <Col>
              <h3>€{houseSittingRate}</h3>
              <p>per nigth</p>
            </Col>
          </Row>
        ) : (
          ""
        )}
        {dropInVisits ? (
          <Row>
            <Col>
              <h3>Drop-In Visits</h3>
              <p>visits in your home</p>
            </Col>
            <Col>
              <h3>€{dropInVisitsRate}</h3>
              <p>per visit</p>
            </Col>
          </Row>
        ) : (
          ""
        )}
        {doggyDayCare ? (
          <Row>
            <Col>
              <h3>Doggy Day Care</h3>
              <p>in the sitter's home</p>
            </Col>
            <Col>
              <h3>€{doggyDayCareRate}</h3>
              <p>per day</p>
            </Col>
          </Row>
        ) : (
          ""
        )}
        {dogWalking ? (
          <Row>
            <Col>
              <h3>Dog Walking</h3>
              <p>in your neighbourhood</p>
            </Col>
            <Col>
              <h3>€{dogWalkingRate}</h3>
              <p>per walk</p>
            </Col>
          </Row>
        ) : (
          ""
        )}
        
        <Row className="mt-5 mb-3">
          <h2>{full_name} can host and watch in your home</h2>
        </Row>
        <Row>
          {small ? (
            <Col>
              <h3>Small</h3>
              <p>0-7kg</p>
            </Col>
          ) : (
            ""
          )}
          {medium ? (
            <Col>
              <h3>Medium</h3>
              <p>8-18kg</p>
            </Col>
          ) : (
            ""
          )}
          {large ? (
            <Col>
              <h3>Large</h3>
              <p>18-45kg</p>
            </Col>
          ) : (
            ""
          )}
          {gaint ? (
            <Col>
              <h3>Gaint</h3>
              <p>45+ kg</p>
            </Col>
          ) : (
            ""
          )}
          {cat ? (
            <Col>
              <h3>Cat</h3>
            </Col>
          ) : (
            ""
          )}
        </Row>
      </Container>
    </>
  );
}
