import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectToken } from "../../store/user/selectors";
import { Button } from "react-bootstrap";
import { delectPet } from "../../store/userDetails/actions";

export default function Delete(props) {
  const dispatch = useDispatch();
  const token = useSelector(selectToken);
  console.log("from delete",props.id)
  return (
    <>
      {token ? (
        <Button
          variant="outline-dark"
          onClick={() => {
            dispatch(delectPet(props.id));
          }}
        >
          Delete
        </Button>
      ) : null}
    </>
  );
}
