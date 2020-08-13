import React, { useState, useEffect } from "react";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
//import Button from "react-bootstrap/Button";
import { signUp } from "../../store/user/actions";
import { selectToken } from "../../store/user/selectors";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, Link } from "react-router-dom";
import { Col } from "react-bootstrap";
import "./signup.css";

export default function SignUp() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState();
  const dispatch = useDispatch();
  const token = useSelector(selectToken);
  const history = useHistory();

  useEffect(() => {
    if (token !== null) {
      history.push("/");
    }
  }, [token, history]);

  function submitForm(event) {
    event.preventDefault();
    let petOwner;
    let petSitter;

    if (role === "Pet Owner") {
      petOwner = true;
      petSitter = false;
    } else {
      petOwner = false;
      petSitter = true;
    }
    console.log(petOwner, petSitter);
    dispatch(signUp(name, email, password, petOwner, petSitter));

    setEmail("");
    setPassword("");
    setName("");
    setRole();
  }

  return (
    <>
      
        
          <div className="signup">
            <div className="signup__form">
              <Container className="form">
                <Form as={Col} md={{ span: 6, offset: 3 }} className="form-login">
                  <h1 className="mt-5 mb-5">Signup</h1>
                  <Form.Group controlId="formBasicName">
                    <Form.Label>Name</Form.Label>
                    <Form.Control
                      value={name}
                      onChange={(event) => setName(event.target.value)}
                      type="text"
                      placeholder="Enter name"
                      required
                    />
                  </Form.Group>
                  <Form.Group controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control
                      value={email}
                      onChange={(event) => setEmail(event.target.value)}
                      type="email"
                      placeholder="Enter email"
                      required
                    />
                    <Form.Text className="text-muted">
                      We'll never share your email with anyone else.
                    </Form.Text>
                  </Form.Group>

                  <Form.Group controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                      value={password}
                      onChange={(event) => setPassword(event.target.value)}
                      type="password"
                      placeholder="Password"
                      required
                    />
                  </Form.Group>

                  <Form.Group controlId="role">
                    <Form.Label>Role</Form.Label>
                    <Form.Control
                      as="select"
                      htmlSize={2}
                      custom
                      onChange={(e) => setRole(e.target.value)}
                    >
                      <option>Pet Owner</option>
                      <option>Pet Sitter</option>
                    </Form.Control>
                  </Form.Group>
                  <Form.Group className="mt-5">
                    <button
                     
                      type="submit"
                      onClick={submitForm}
                      className="btnsignup"
                    >
                      Sign up
                    </button>
                  </Form.Group>
                  <Link to="/login" className="linksignup">Click here to log in</Link>
                </Form>
              </Container>
            </div>
          </div>
       
     
    </>
  );
}
