import React from "react";
import {  Form, Col,  Image } from "react-bootstrap";
import StarRatings from "react-star-ratings";

export default function Review(props) {
  return (
    <div className="form">
      <Form.Row>
        <Col xs lg="1">
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
        <Col xs lg="6">
          <h5>{props.name}</h5>
          <StarRatings
            rating={props.rating}
            starRatedColor="#403d50"
            starEmptyColor="grey"
            starDimension="20px"
            starSpacing="5px"
          />

          <p>{props.comment}</p>
        </Col>
      </Form.Row>{" "}
    </div>
  );
}
