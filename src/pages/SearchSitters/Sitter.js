import React from "react";
import { Row, Image, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function Sitter(props) {
  return (
    <Row className="mt-5 mb-3">
      <Image src={props.image} rounded alt="171x180" width={171} height={180} />
      <Col>
        <Link to={`/sitters/${props.id}`} style={{color: 'black'}}>
          <h3>{props.full_name}</h3>
        </Link>

        <p>
          {props.street},{props.city}
        </p>
      </Col>
    </Row>
  );
}
