import React from "react";
import { Row, Image, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function Sitter(props) {
  return (
    <><Col className="form">
      <Image src={props.image} rounded alt="171x180" width={171} height={180} />
      
        <Link to={`/sitters/${props.id}`} style={{color: 'black'}}>
          <h3>{props.full_name}</h3>
        </Link>

        <p>
          {props.street},{props.city}
        </p>
        </Col>
      </>
    
  );
}
