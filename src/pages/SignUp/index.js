import React, { useState, useRef, useEffect } from "react";
import { signUp } from "../../store/user/actions";
import { selectToken } from "../../store/user/selectors";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, Link } from "react-router-dom";
import { Button, Row, Col, Container, Form, FormLabel } from "react-bootstrap";
import "./signup.css";
import Geocode from "react-geocode";
import { apiKeyGoogle } from "../../config/constants";
import { CloudinaryContext, Image } from "cloudinary-react";
import { fetchPhotos, openUploadWidget } from "../../CloudinaryService";
import firebase from "./firebase";
import { showMessageWithTimeout } from "../../store/appState/actions";

var autoComplete;

export default function SignUp() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [query, setQuery] = useState("");
  const [phoneNo, set_phone] = useState();
  const [images, setImages] = useState();
  const [radioValue, setRadioValue] = useState("");
  const dispatch = useDispatch();
  const token = useSelector(selectToken);
  const history = useHistory();
  const autoCompleteRef = useRef(null);

  const radios = [
    { name: " I am a pet owner", value: "1" },
    { name: " I want to offer pet services", value: "2" },
  ];

  //google
  const loadScript = (url, callback) => {
    let script = document.createElement("script");
    script.type = "text/javascript";

    if (script.readyState) {
      script.onreadystatechange = function () {
        if (
          script.readyState === "loaded" ||
          script.readyState === "complete"
        ) {
          script.onreadystatechange = null;
          callback();
        }
      };
    } else {
      script.onload = () => callback();
    }

    script.src = url;
    document.getElementsByTagName("head")[0].appendChild(script);
  };

  function handleScriptLoad(updateQuery, autoCompleteRef) {
    autoComplete = new window.google.maps.places.Autocomplete(
      autoCompleteRef.current,
      { types: ["geocode"], componentRestrictions: { country: "nl" } }
    );
    autoComplete.setFields(["address_components", "formatted_address"]);
  }
  useEffect(()=>{
    loadScript(
      `https://maps.googleapis.com/maps/api/js?key=${apiKeyGoogle}&libraries=places&language=en`,
      () => handleScriptLoad(setQuery, autoCompleteRef)
    );
  })
  useEffect(() => {
    if (token !== null) {
      history.push("/");
    }
    fetchPhotos("image", setImages);
    
  }, [token, history]);

  Geocode.setApiKey(apiKeyGoogle);
  Geocode.setRegion("nl");

  let petOwner = false;
  let petSitter = false;

  function submitForm(event) {
    event.preventDefault();
    if (radioValue === "1") {
      petOwner = true;
      petSitter = false;
    } else if (radioValue === "2") {
      petOwner = false;
      petSitter = true;
    }
    if (
      !name ||
      !phoneNo ||
      !email ||
      !password ||
      !query ||
      (!petOwner && !petSitter) ||
      (petOwner && petSitter)
    ) {
      dispatch(
        showMessageWithTimeout("danger", true, "Please fill out all the fields")
      );
    } else {
      Geocode.fromAddress(query).then(
        (response) => {
          const { lat, lng } = response.results[0].geometry.location;
          console.log(
            "from signup",
            name,
            images,
            phoneNo,
            lat,
            lng,
            email,
            password,
            petOwner,
            petSitter,
            query
          );
          dispatch(
            signUp(
              name,
              images,
              phoneNo,
              lat,
              lng,
              email,
              password,
              petOwner,
              petSitter,query
            )
          );
        },
        (error) => {
          dispatch(
            showMessageWithTimeout(
              "danger",
              true,
              "Sorry, we did not find the address"
            )
          );
        }
      );
    }
    setEmail("");
    setPassword("");
    setName("");
    set_phone();
    setQuery("");
    setRadioValue("");
    setImages();
  }

  //cloudinary
  const beginUpload = (tag) => {
    const uploadOptions = {
      cloudName: "dsuvhhlxm",
      tags: [tag, "anImage"],
      uploadPreset: "vnqxy7xe",
    };

    openUploadWidget(uploadOptions, (error, photos) => {
      if (!error) {
        //console.log(photos);
        if (photos.event === "success") {
          setImages(photos.info.url);
        }
      } else {
        console.log(error);
      }
    });
  };

  //firebase
  const setUpRecaptcha = () => {
    window.recaptchaVerifier = new firebase.auth.RecaptchaVerifier(
      "recaptcha-container",
      {
        size: "invisible",
        callback: function (response) {
          // reCAPTCHA solved, allow signInWithPhoneNumber.
          onSignInSubmit();
        },
      }
    );
  };

  const onSignInSubmit = (event) => {
    console.log("hi");
    event.preventDefault();
    setUpRecaptcha();
    var phoneNumber = phoneNo;
    var appVerifier = window.recaptchaVerifier;
    firebase
      .auth()
      .signInWithPhoneNumber(phoneNumber, appVerifier)
      .then(function (confirmationResult) {
        // SMS sent. Prompt user to type the code from the message, then sign the
        // user in with confirmationResult.confirm(code).
        window.confirmationResult = confirmationResult;
        var code = window.prompt("Enter OTP");
        confirmationResult
          .confirm(code)
          .then(function (result) {
            // User signed in successfully.
            //var user = result.user;
            console.log("user loged in");
            dispatch(
              showMessageWithTimeout("success", false, "Number verified", 1500)
            );
          })
          .catch(function (error) {
            // User couldn't sign in (bad verification code?)
            // ...
          });
      })
      .catch(function (error) {
        // Error; SMS not sent
        // ...
      });
  };

  return (
    <>
      <Container className="form-signup">
        <Row>
          <Col>
            <Form as={Col} md={{ span: 8, offset: 1 }}>
              <h1 className="mt-5 mb-3, sign-up" align="center">
                Sign up
              </h1>
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
              <Form.Row>
                <Col>
                  {" "}
                  <Form.Group controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control
                      value={email}
                      onChange={(event) => setEmail(event.target.value)}
                      type="email"
                      placeholder="Enter email"
                      required
                    />
                  </Form.Group>
                </Col>
                <Col>
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
                </Col>
              </Form.Row>

              <Form.Group controlId="formGridAddress1">
                <Form.Label>Address</Form.Label>
                <Form.Control
                  type="address"
                  ref={autoCompleteRef}
                  onChange={(event) => setQuery(event.target.value)}
                  value={query}
                  placeholder="Enter address"
                />
              </Form.Group>

              <CloudinaryContext cloudName="dsuvhhlxm">
                <Form.Row className="mt-5 mb-3">
                  <Col>
                    <FormLabel>Profile picture </FormLabel>
                  </Col>
                  <Col>
                    {" "}
                    <Button
                      variant="outline-dark"
                      onClick={() => {
                        beginUpload("image");
                        console.log("images", images);
                      }}
                    >
                      <i className="fas fa-camera"></i> Upload Image
                    </Button>
                  </Col>
                </Form.Row>
                {images ? (
                  <Image src={images} alt="171x180" width={171} height={180} />
                ) : null}
              </CloudinaryContext>

              <div id="recaptcha-container"></div>
              <Form.Group controlId="formGridPhone">
                <Form.Label>Phone Number</Form.Label>
                <Form.Control onChange={(e) => set_phone(e.target.value)} />
              </Form.Group>
              <Button
                type="submit"
                variant="outline-dark"
                onClick={onSignInSubmit}
                className="mb-4"
              >
                Verify
              </Button>

              <fieldset>
                {radios.map((radio, idx) => (
                  <div key={idx}>
                    <input
                      type="radio"
                      value={radio.value}
                      checked={radioValue === radio.value}
                      onChange={(e) => {
                        setRadioValue(e.currentTarget.value);
                      }}
                      name="formHorizontalRadios"
                      id={`formHorizontalRadios${radio.value}`}
                    />
                    <label
                      className="label-radio"
                      htmlFor={`formHorizontalRadios${radio.value}`}
                    >
                      {radio.name}
                    </label>
                  </div>
                ))}
              </fieldset>

              <Form.Group className="mt-5">
                <Button
                  className="but-signup"
                  variant="dark"
                  align="center"
                  onClick={submitForm}
                >
                  SIGN UP
                </Button>
              </Form.Group>
              <Link to="/login" className="linksignup">
                Already have an account?Log in
              </Link>
            </Form>
          </Col>
          <Col>
            <Col className="col-8">
              <Image
                className="image"
                src={require("../../images/boyanddog.jpg")}
                alt="cat-dog"
                width="400"
                height="550"
              />
            </Col>
          </Col>
        </Row>
      </Container>
    </>
  );
}
