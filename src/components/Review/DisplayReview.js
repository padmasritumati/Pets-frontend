import React from "react";
import { Container, Col, Row, Image } from "react-bootstrap";
import StarRatings from "react-star-ratings";

export default function Review(props) {
  return (
    <div className="form">
      <Container>
        <Row className="row justify-content-md-center">
          <Col className="col-1">
            <Image
              style={{
                width: "50px",
                height: "50px",
                borderRadius: "100%",
              }}
              src={props.image}
              alt={props.image}
            />
          </Col>
          <Col>
            {" "}
            <Row className="mb-2">
              <h5>{props.name}</h5>
            </Row>
          </Col>
        </Row>{" "}
        <StarRatings
          rating={props.rating}
          starRatedColor="#403d50"
          starEmptyColor="grey"
          starDimension="20px"
          starSpacing="5px"
        />
        <Row>
          <Col>
            {" "}
            <p>{props.comment}</p>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
