import React from "react";
import { Image, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function Sitter(props) {
  return (
    <><Col className="form">
      <Image src={props.image} width={171} height={180} roundedCircle />
      
        <Link to={`/sitters/${props.id}`} style={{color: 'black'}}>
          <h3>{props.name}</h3>
        </Link>

        <p>
          {props.address}
        </p>
        </Col>
      </>
    
  );
}
