import React, { useEffect } from "react";
import { getServices } from "../../store/searchSitter/actions";
import { selectSitterList } from "../../store/searchSitter/selectors";
import { useDispatch, useSelector } from "react-redux";
import { Jumbotron, Container } from "react-bootstrap";
import Sitter from "./Sitter";

export default function SearchSitters() {
  const dispatch = useDispatch();
  const sitterList = useSelector(selectSitterList);
  console.log("sitter",sitterList)

  useEffect(() => {
    dispatch(getServices());
  }, [dispatch]);

  return (
    <>
      <Jumbotron>
        <h1>Sitters list</h1>
      </Jumbotron>
      <Container>
        {sitterList.map((sitter) => {
          return (
            <Sitter
              key={sitter.id}
              id={sitter.id}
              full_name={sitter.full_name}
              image={sitter.image}
              street={sitter.address.street}
              city={sitter.address.city}
              country={sitter.address.country}
              service={sitter.service}
            />
          );
        })}
      </Container>
    </>
  );
}
