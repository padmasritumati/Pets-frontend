import React, { useState } from "react";
import { Form, Col, Button } from "react-bootstrap";
import firebase from "./firebase";

export default function Phone() {
  const [phone, set_phone] = useState();

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
    var phoneNumber = phone;
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
    <div>
      <Form >
        <h2 className="mt-5 mb-3">Add your phone number</h2>
        <p>
          We requires a verified phone number for important updates. <br></br>
          Note: your phone number won't be displayed on your profile.
        </p>

        <div id="recaptcha-container"></div>
        <Form.Group controlId="formGridPhone">
          <Form.Label>Phone Number</Form.Label>
          <Form.Control onChange={(e) => set_phone(e.target.value)} />
        </Form.Group>
        <Button type="submit" onClick={onSignInSubmit}>
          Verify
        </Button>
      </Form>
    </div>
  );
}
