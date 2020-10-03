import React, { useState, useEffect } from "react";
import { Form, Col, Button, Row, Container } from "react-bootstrap";
import { pet } from "../../store/userDetails/actions";
import { selectUser } from "../../store/user/selectors";
import { useSelector, useDispatch } from "react-redux";
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
  const user = useSelector(selectUser);

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
    <div className="petOwner">
      <h1 className="pet">Tell us a bit about your pet</h1>
      <Form.Row className="justify-content-md-center mt-5">
        <Col xs lg="2">
          <Form.Check
            inline
            label={
              <img src="https://img.icons8.com/bubbles/100/000000/dog.png" alt="dog icon" />
            }
            type="radio"
            name="catOrDog"
            value="Dog"
            onChange={(e) => setType(e.target.value)}
          />
        </Col>
        <Col xs lg="2">
          <Form.Check
            inline
            label={
              <img src="https://img.icons8.com/bubbles/100/000000/cat.png" alt="cat icon"/>
            }
            type="radio"
            name="catOrDog"
            value="Cat"
            onChange={(e) => setType(e.target.value)}
          />
        </Col>
      </Form.Row>
      <Container
        as={Col}
        md={{ span: 6, offset: 3.5 }}
        className="mt-2 mb-3 form"
      >
        <Form.Row>
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
        </Form.Row>
        <Form.Row>
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
        </Form.Row>
        <Form.Row>
          <Col>
            <Form.Group controlId="petBreed">
              <Form.Label>Breed</Form.Label>
              <Form.Control onChange={(e) => setBreed(e.target.value)} />
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
        </Form.Row>

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
                  <i class="fas fa-camera"></i> Upload Image
                </Button>{" "}
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

        < Form.Row className=" justify-content-md-center mt-5">
          <Col xs lg="2">
            <Link to={`/dashboard/${user.id}`}>
              <Button type="submit" size="lg"  variant="dark" onClick={handler}>
                Submit
              </Button>
            </Link>
          </Col>
        </Form.Row>
      </Container>
    </div>
  );
}
