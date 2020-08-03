import React, { useState } from "react";
import { Form, Button, Row ,Col} from "react-bootstrap";
import { selectUser } from "../../store/user/selectors";
import { useSelector, useDispatch } from "react-redux";
import { sendEmail } from "../../store/userById/actions";
import { useParams } from "react-router-dom";

export default function Contact() {
  const dispatch = useDispatch();
  const { id } = useParams();
  const sitterId = id;
  const user = useSelector(selectUser);
  const [message, setMessage] = useState();
  const userId = user.id;
  const handler = () => {
    dispatch(sendEmail(message, userId, sitterId));
  };
  return (
    <Form as={Col} md={{ span: 6, offset: 3 }} className="mt-5">
      <Row>
      <h1>Send a message to the sitter</h1>
      </Row>
      <Form.Group>
     
        <Row>
          <Form.Label>
            <h3>Message</h3>
          </Form.Label>
        </Row>
        <Row>
          <textarea
            name="message"
            rows="3"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          ></textarea>
        </Row>
        <br>
        </br>
        <Button onClick={handler}> Send</Button>
      </Form.Group>
    </Form>
  );
}
