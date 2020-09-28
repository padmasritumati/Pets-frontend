import React, { useState, useEffect } from "react";
import { login } from "../../store/user/actions";
import { selectToken } from "../../store/user/selectors";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, Link } from "react-router-dom";
import { Col, Row, Image, Button,Form,Container } from "react-bootstrap";
import "./login.css";

export default function SignUp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const token = useSelector(selectToken);
  const history = useHistory();

  useEffect(() => {
    if (token !== null) {
      history.push("/");
    }
  }, [token, history]);

  function submitForm(event) {
    //console.log("hi");
    event.preventDefault();
    dispatch(login(email, password));
    setEmail("");
    setPassword("");
  }

  return (
    <>
      <Container className="form-login">
        <Row>
          <Col className="mt-5">
            <Form as={Col} md={{ span: 6, offset: 3 }} >
              <h1 className="mt-5 mb-5, login" align="center">
                Log in
              </h1>
              <Form.Group controlId="formBasicEmail">
                <img src="https://img.icons8.com/fluent-systems-regular/24/000000/new-post.png" />
                <Form.Label className=" mb-2">Email address</Form.Label>
                <Form.Control
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                  type="email"
                  placeholder="Enter email"
                  required
                />
              </Form.Group>

              <Form.Group controlId="formBasicPassword">
                <img src="https://img.icons8.com/fluent-systems-regular/24/000000/password-window.png" />
                <Form.Label>Password</Form.Label>
                <Form.Control
                  value={password}
                  onChange={(event) => setPassword(event.target.value)}
                  type="password"
                  placeholder="Password"
                  required
                />
              </Form.Group>
              <Form.Group>
                <Button
                className="but"
                  variant="dark"
                  align="center"
                  onClick={submitForm}
                >
                  LOG IN
                </Button>
              </Form.Group>
              <Link
                to="/signup"
                align="center"
                style={{ textAlign: "center" }}
                className="linklogin"
              >
                Click here to sign up
              </Link>
            </Form>
          </Col>

          <Col>
            <Col className="col-8">
              <Image
                className="image"
                src={require("../../images/catanddog.jpg")}
                alt="cat-dog"
                width="600"
                height="550"
              />
            </Col>
          </Col>
        </Row>
      </Container>
    </>
  );
}
