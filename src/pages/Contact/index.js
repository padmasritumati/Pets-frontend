import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { selectUser } from "../../store/user/selectors";
import { useSelector, useDispatch } from "react-redux";
import { sendEmail } from "../../store/userById/actions";
import { useParams } from "react-router-dom";

export default function Contact() {
  const dispatch = useDispatch();
  const {id}=useParams();
  const sitterId=id
  const user = useSelector(selectUser);
  const [message, setMessage] = useState();
  const userId = user.id;
  const handler = () => {
    dispatch(sendEmail(message, userId,sitterId));
  };
  return (
    <Form>
      <Form.Group controlId="exampleForm.ControlTextarea1">
        <Form.Label>Example textarea</Form.Label>
        <Form.Control
          as="textarea"
          rows="3"
          style={{
            border: "1px solid #ced4da",
            borderRadius: ".25rem",
          }}
          onChange={(event) => setMessage(event.target.value)}
        />
      </Form.Group>

      <Button onClick={handler}>Send</Button>
    </Form>
  );
}
