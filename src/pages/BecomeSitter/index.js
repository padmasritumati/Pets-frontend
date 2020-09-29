import React, { useState } from "react";
import { Container, Col, Form, Row, Button, FormLabel } from "react-bootstrap";
import { service } from "../../store/userDetails/actions";
import { useDispatch } from "react-redux";

export default function Services() {
  const [boarding, set_Boarding] = useState("off");
  const [boardingRate, set_BoardingRate] = useState("20");
  const [houseSitting, set_HouseSitting] = useState("off");
  const [houseSittingRate, set_HouseSittingRate] = useState("20");
  const [dropInVisits, set_DropInVisits] = useState("off");
  const [dropInVisitsRate, set_DropInVisitsRate] = useState("10");
  const [doggyDayCare, set_DoggyDayCare] = useState("off");
  const [doggyDayCareRate, set_DoggyDayCareRate] = useState("17");
  const [dogWalking, set_DogWalking] = useState("off");
  const [dogWalkingRate, set_DogWalkingRate] = useState("10");
  const [small, set_Small] = useState("off");
  const [medium, set_Medium] = useState("off");
  const [large, set_Large] = useState("off");
  const [gaint, set_Gaint] = useState("off");
  const [cat, set_Cat] = useState();
  const dispatch = useDispatch();

  

  const services = {
    boarding: boarding,
    houseSitting: houseSitting,
    dropInVisits: dropInVisits,
    doggyDayCare: doggyDayCare,
    dogWalking: dogWalking,

    boardingRate: boardingRate,
    houseSittingRate: houseSittingRate,
    dropInVisitsRate: dropInVisitsRate,
    doggyDayCareRate: doggyDayCareRate,
    dogWalkingRate: dogWalkingRate,

    samll: small,
    medium: medium,
    large: large,
    gaint: gaint,

    cat: cat,
    
  };

  console.log(services);

  const handler = () => {
    console.log("services", services);
    dispatch(service(services));
  };

  return (
    <div>
      <h1 className="headerdashboard">
        {" "}
        Which services would you like to offer?
      </h1>

      <Container as={Col} className="mt-5 form" md={{ span: 9, offset: 1.5 }}>
        <Form.Row className="justify-content-md-center">
          <Col xs lg="2">
            <img src="https://img.icons8.com/clouds/100/000000/dog.png" />
          </Col>
          <Col xs lg="2">
            <img src="https://img.icons8.com/clouds/100/000000/cat.png" />
          </Col>
        </Form.Row>
        {/*services and price form */}
        <Form.Row className="mt-5">
          <Col>
            <Row>
              <Col>
                <h3>
                  {" "}
                  <i className="fas fa-luggage-cart"></i> Boarding
                </h3>
              </Col>
              <Col>
                <Form.Check
                  type="switch"
                  id="custom-switch-boarding"
                  label=""
                  onChange={(e) => set_Boarding(e.target.value)}
                />
              </Col>
            </Row>
            <p>The owner's pets come to your home and stay overnight.</p>
            <Form.Group as={Col} controlId="formGridRate">
              <Form.Label>Rate</Form.Label>
              <Form.Control
                type="number"
                min="15"
                max="100"
                defaultValue="20"
                onChange={(e) => set_BoardingRate(e.target.value)}
              />
            </Form.Group>{" "}
          </Col>
          <Col>
            <Row>
              <Col>
                {" "}
                <h3>
                  <i className="fas fa-paw"></i> Dog Walking
                </h3>
              </Col>
              <Col>
                <Form.Check
                  type="switch"
                  id="custom-switch-walking"
                  label=""
                  onChange={(e) => set_DogWalking(e.target.value)}
                />
              </Col>
            </Row>

            <p>Pet Owners request dog walks in their neighbourhood.</p>
            <Form.Group as={Col} controlId="formGridRate">
              <Form.Label>Rate</Form.Label>
              <Form.Control
                type="number"
                min="8"
                max="50"
                defaultValue="10"
                onChange={(e) => set_DogWalkingRate(e.target.value)}
              />
            </Form.Group>
          </Col>
          <Col>
            <Row>
              <Col>
                {" "}
                <h3>
                  <i className="fas fa-sun"></i> Doggy Day Care
                </h3>
              </Col>
              <Col>
                {" "}
                <Form.Check
                  type="switch"
                  id="custom-switch-doggy"
                  label=""
                  onChange={(e) => set_DoggyDayCare(e.target.value)}
                />
              </Col>
            </Row>
            <p>he owner's pets stay at your home during the day</p>
            <Form.Group as={Col} controlId="formGridRate">
              <Form.Label>Rate</Form.Label>
              <Form.Control
                type="number"
                min="15"
                max="100"
                defaultValue="17"
                onChange={(e) => set_DoggyDayCareRate(e.target.value)}
              />
            </Form.Group>
          </Col>
        </Form.Row>

        <Form.Row className="mt-5">
          <Col>
            <Row>
              <Col>
                {" "}
                <h3>
                  <i className="fas fa-door-open"></i> Drop-In Visits
                </h3>
              </Col>
              <Col>
                <Form.Check
                  type="switch"
                  id="custom-switch-dropin"
                  label=""
                  onChange={(e) => set_DropInVisits(e.target.value)}
                />
              </Col>
            </Row>
            <p>
              Pet Owners ask you to do home visits to feed and play with their
              pets.
            </p>
            <Form.Group as={Col} controlId="formGridRate">
              <Form.Label>Rate</Form.Label>
              <Form.Control
                type="number"
                min="8"
                max="50"
                defaultValue="10"
                onChange={(e) => set_DropInVisitsRate(e.target.value)}
              />
            </Form.Group>
          </Col>
          <Col>
            <Row>
              <Col>
                {" "}
                <h3>
                  <i className="fas fa-house-user"></i> House Sitting
                </h3>
              </Col>
              <Col>
                <Form.Check
                  type="switch"
                  id="custom-switch-house"
                  label=""
                  onChange={(e) => set_HouseSitting(e.target.value)}
                />
              </Col>
            </Row>
            <p>
              You go to the pet owner's home and stay overnight, taking care of
              their dogs and home.
            </p>
            <Form.Group as={Col} controlId="formGridRate">
              <Form.Label>Rate</Form.Label>
              <Form.Control
                type="number"
                min="15"
                max="100"
                defaultValue="20"
                onChange={(e) => set_HouseSittingRate(e.target.value)}
              />
            </Form.Group>
          </Col>
        </Form.Row>
        {/*size of the dog part */}
        <h2 className="mt-5 mb-3">What size dogs do you accept?</h2>
        <Form.Row>
          <Col>
            <Form.Check
              type="checkbox"
              id="custom-switch-small"
              label={
                <>
                  <h5>Small(0-7kg)</h5>
                  <img src="https://img.icons8.com/carbon-copy/40/000000/dog.png" />
                </>
              }
              onChange={(e) => set_Small(e.target.value)}
            ></Form.Check>
          </Col>
          <Col>
            <Form.Check
              type="checkbox"
              id="custom-switch-Medium"
              label={
                <>
                  <h5>Medium(7-18kg)</h5>
                  <img src="https://img.icons8.com/carbon-copy/60/000000/dog.png" />
                </>
              }
              onChange={(e) => set_Medium(e.target.value)}
            />
          </Col>
          <Col>
            {" "}
            <Form.Check
              type="checkbox"
              id="custom-switch-large"
              label={
                <>
                  <h5>Large(18-45kg)</h5>
                  <img src="https://img.icons8.com/carbon-copy/80/000000/dog.png" />
                </>
              }
              onChange={(e) => set_Large(e.target.value)}
            />
          </Col>

          <Col>
            {" "}
            <Form.Check
              type="checkbox"
              id="custom-switch-Gaint"
              label={
                <>
                  <h5>Gaint(45kg +)</h5>
                  <img src="https://img.icons8.com/carbon-copy/100/000000/dog.png" />
                </>
              }
              onChange={(e) => set_Gaint(e.target.value)}
            />
          </Col>
        </Form.Row>
        {/* asking about cat */}
        <h2>
          Do you accept cats <i className="fas fa-cat"></i> ?
        </h2>
        <Form.Row className="btn-toolbar pull-left" mt="3">
          <Col>
            <Button
              className="btn mr-3"
              variant="outline-dark"
              value="true"
              onClick={(e) => set_Cat("true")}
            >
              Yes
            </Button>
          </Col>
          <Col>
            {" "}
            <Button variant="outline-dark" value="false" className="btn mr-3">
              No
            </Button>
          </Col>
        </Form.Row>
        {/*submit button part*/}
        <Form.Row className="mt-5 justify-content-md-center">
          <Button
            style={{ justifyContent: "center" }}
            type="submit"
            variant="dark"
            className="mt-5"
            onClick={handler}
          >
            Submit
          </Button>
        </Form.Row>
      </Container>
    </div>
  );
}
