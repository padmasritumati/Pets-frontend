import React, { useState, useEffect } from "react";
import { Form, Col, Button } from "react-bootstrap";
import firebase from "./firebase";
import { Link } from "react-router-dom";
import { phone } from "../../store/userDetails/actions";
import { useDispatch, useSelector } from "react-redux";
import { CloudinaryContext, Image, Transformation } from "cloudinary-react";
import { fetchPhotos, openUploadWidget } from "../../CloudinaryService";
import { selectUser } from "../../store/user/selectors";

export default function Phone() {
  const [phoneNo, set_phone] = useState();
  const [images, setImages] = useState();
  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  const handler = () => {
    dispatch(phone(phoneNo, images));
  };

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

  //image code

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
          setImages(photos.info.public_id);
        }
      } else {
        console.log(error);
      }
    });
  };

  useEffect(() => {
    fetchPhotos("image", setImages);
  }, []);

  return (
    <div>
      <Form as={Col} md={{ span: 6, offset: 3 }} className="mt-5">
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

        <CloudinaryContext cloudName="dsuvhhlxm">
          <Form className="mt-5 mb-3">
            <h3>Required Profile Photo</h3>
            <p>Well-lit, clear frontal face photos</p>

            <Button
              variant="outline-primary"
              onClick={() => {
                beginUpload("image");
                console.log("images", images);
              }}
            >
              Upload Image
            </Button>

            <Image publicId={images}>
              <Transformation
                width="400"
                height="400"
                gravity="face"
                radius="max"
                crop="crop"
              />
              <Transformation width="200" crop="scale" />
            </Image>
          </Form>
        </CloudinaryContext>
        {user.petSitter ? (
          <Link to="/services">
            <Button onClick={handler}>Submit</Button>
          </Link>
        ) : (
          <Link to="/pets">
            <Button onClick={handler}>Submit</Button>
          </Link>
        )}
      </Form>
    </div>
  );
}
