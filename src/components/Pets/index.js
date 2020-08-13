import React, { useState, useEffect } from "react";
import { Form, Col, Button, Row } from "react-bootstrap";
import { pet } from "../../store/userDetails/actions";
import { useDispatch } from "react-redux";
import { CloudinaryContext, Image } from "cloudinary-react";
import { fetchPhotos, openUploadWidget } from "../../CloudinaryService";
import { Link } from "react-router-dom";

export default function Pets() {
  const [type, setType] = useState();
  const [name, setName] = useState();
  const [weight, setWeigth] = useState();
  const [breed, setBreed] = useState();
  const [ageInYears, setAgeInYears] = useState();
  const [ageInMonths, setAgeInMonths] = useState();
  const [sex, setSex] = useState();
  const [images, setImages] = useState();
  const dispatch = useDispatch();

  const handler = () => {
    dispatch(
      pet(type, name, weight, breed, ageInYears, ageInMonths, sex, images)
    );
  };

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

  useEffect(() => {
    fetchPhotos("image", setImages);
  }, []);

  return (
    <div className="form">
      <Form as={Col} md={{ span: 6, offset: 3 }} className="mt-5 mb-3">
        <h1>Tell us a bit about your pet</h1>
        <h3 className="mt-5 ">What type of pet?</h3>
        <Row className="mt-3">
          <Col>
            <>
              <Button
                variant="outline-dark"
                value="dog"
                onClick={(e) => setType(e.target.value)}
              >
                <i class="fas fa-dog"></i>Dog
              </Button>{" "}
              <Button
                variant="outline-dark"
                value="cat"
                onClick={(e) => setType(e.target.value)}
              >
                <i class="fas fa-cat"></i>Cat
              </Button>{" "}
            </>
          </Col>
        </Row>
        <Row className="mt-5">
          <Col>
            <Form.Group controlId="petName">
              <Form.Label>Name</Form.Label>
              <Form.Control onChange={(e) => setName(e.target.value)} />
            </Form.Group>
          </Col>
          <Col>
            <Form.Group controlId="petWeight">
              <Form.Label>Weight(Kg)</Form.Label>
              <Form.Control
                type="number"
                onChange={(e) => setWeigth(e.target.value)}
              />
            </Form.Group>
          </Col>
        </Row>
        <Row>
          <Col>
            <Form.Group controlId="petBreed">
              <Form.Label>Breed</Form.Label>
              <Form.Control onChange={(e) => setBreed(e.target.value)} />
            </Form.Group>
          </Col>
        </Row>
        <Row>
          <Col>
            <Form.Group controlId="petAge(years)">
              <Form.Label>Age(years)</Form.Label>
              <Form.Control
                type="number"
                onChange={(e) => setAgeInYears(e.target.value)}
              />
            </Form.Group>
          </Col>
          <Col>
            <Form.Group controlId="petAge(months)">
              <Form.Label>Age(months)</Form.Label>
              <Form.Control
                type="number"
                onChange={(e) => setAgeInMonths(e.target.value)}
              />
            </Form.Group>
          </Col>
          <Col>
            <Form.Group controlId="petsex">
              <Form.Label>sex</Form.Label>
            </Form.Group>
            <Form.Check
              inline
              label="Male"
              type="radio"
              id="maleradio"
              value="male"
              onClick={(e) => setSex(e.target.value)}
            />
            <Form.Check
              inline
              label="Female"
              type="radio"
              id="femaleradio"
              value="female"
              onClick={(e) => setSex(e.target.value)}
            />
          </Col>
        </Row>
        <Row>
          <Col>
          <CloudinaryContext cloudName="dsuvhhlxm">
            <Form className="mt-5 mb-3">
              <h4>Upload your pet image</h4>

              <Button
                variant="outline-dark"
                onClick={() => {
                  beginUpload("image");
                  console.log("images", images);
                }}
              >
                <i class="fas fa-camera"></i>  Upload Image
              </Button>
              {" "}
              {images ? (
                <Image
                  src={images}
                  rounded="true"
                  alt="171x180"
                  width={171}
                  height={180}
                />
              ) : null}
            </Form>
          </CloudinaryContext>
          </Col>
        </Row>
        
        <Row className="mt-5">
        <Col>
        <Link to="/dashboard"><Button type="submit"  variant="outline-dark" onClick={handler}>
          Submit
        </Button></Link>
        </Col>
        </Row>
      </Form>
    </div>
  );
}
