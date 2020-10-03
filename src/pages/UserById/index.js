import React, { useEffect } from "react";
import { userById } from "../../store/userById/actions";
import { useDispatch, useSelector } from "react-redux";
import { useParams, Link } from "react-router-dom";
import { selectUserById } from "../../store/userById/selectors";
import { Container, Form, Row, Image, Col, Button } from "react-bootstrap";
import Review from "../../components/Review";
import ReviewList from "../../components/Review/ReviewList";
import { reviewsSelector } from "../../store/Review/selectors";
import StarRatings from "react-star-ratings";
import { selectToken } from "../../store/user/selectors";

export default function SitterById() {
  const { id } = useParams();
 // console.log("from detailed page", id);
  const dispatch = useDispatch();
  const user = useSelector(selectUserById);
  const token = useSelector(selectToken);
  const reviwe = useSelector(reviewsSelector);

  //console.log("from details page user", user);

  const reviewsFiltered = reviwe.filter((r) => {
    return parseInt(id) === r.sitterUserId;
  });

  const averageOfRating = parseInt(
    reviewsFiltered.reduce((total, next) => total + next.rating, 0) /
      reviewsFiltered.length
  );

  useEffect(() => {
    dispatch(userById(id));
  }, [dispatch, id]);

  return (
    <>
      <h1 className="headerdashboard"> {user.full_name}</h1>
      <Container as={Col} md={{ span: 5, offset: 1 }}>
        <Row className="mt-5 mb-3">
          <Image src={user.image} width={171} height={180} roundedCircle />
          <Col>
            <h1>{user.full_name}</h1>
            <StarRatings 
              rating={averageOfRating ? averageOfRating : 0}
              starRatedColor="#000000"
              starEmptyColor="grey"
              starDimension="20px"
              starSpacing="5px"
            />

            <Row className="mt-3 mb-3">
              <Col>
              {token ? (
                <Link to={`/contact/${user.id}`}>
                  <Button variant="outline-dark" className="mb-4">
                    Contact {user.full_name}
                  </Button>
                </Link>
              ) : null}
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>

      {user.service ? (
        <Container className="mt-5 mb-5 " fluid align="center">
          <Row>
            <Col>
              <Row>
                <Container
                  className="service"
                  as={Col}
                  md={{ span: 9, offset: 1 }}
                >
                  <h1>Services</h1>
                  <Row>
                    <Col>
                      {user.service.boarding ? <h3>Boarding</h3> : null}
                      {user.service.houseSitting ? (
                        <h3>House Sitting</h3>
                      ) : null}
                      {user.service.dropInVisits ? (
                        <h3>Drop-In Visits</h3>
                      ) : null}
                      {user.service.doggyDayCare ? (
                        <h3>Doggy Day Care</h3>
                      ) : null}
                      {user.service.dogWalking ? <h3>Dog Walking</h3> : null}
                    </Col>

                    <Col>
                      {user.service.boarding ? (
                        <h3>€{user.service.boardingRate}</h3>
                      ) : null}
                      {user.service.houseSitting ? (
                        <h3> €{user.service.houseSittingRate}</h3>
                      ) : null}
                      {user.service.dropInVisits ? (
                        <h3>€{user.service.dropInVisitsRate}</h3>
                      ) : null}
                      {user.service.doggyDayCare ? (
                        <h3>€{user.service.doggyDayCareRate}</h3>
                      ) : null}
                      {user.service.dogWalking ? (
                        <h3>€{user.service.dogWalkingRate}</h3>
                      ) : null}
                    </Col>
                  </Row>
                </Container>
              </Row>
              <Row>
                <Container
                  className="service"
                  as={Col}
                  md={{ span: 9, offset: 1 }}
                >
                  <h2 className="mb-2">Type of pet</h2>
                  <Form.Row className="justify-content-md-center mt-3 ">
                    <Col xs lg="2">
                      <h4>Dog</h4>
                    </Col>
                    <Col xs lg="2">
                      {user.service.cat ? <h4> Cat</h4> : null}
                    </Col>
                  </Form.Row>
                  <h2 className="mt-3 mb-2">Size of Dog </h2>
                  <Form.Row className="justify-content-md-center mt-3 ">
                    <Col xs lg="3">
                      {user.service.small ? <h4>Small</h4> : null}
                      {user.service.medium ? <h4>Medium</h4> : null}
                    </Col>
                    <Col xs lg="3">
                      {user.service.large ? <h4>Large</h4> : null}
                      {user.service.gaint ? <h4>Gaint</h4> : null}
                    </Col>
                  </Form.Row>
                </Container>
              </Row>
            </Col>
            <Col>
              <Container as={Col}>
                <Col className="service">
                  <ReviewList></ReviewList>
                </Col>

                <Col className="service">
                  <Review> </Review>
                </Col>
              </Container>
            </Col>
          </Row>
        </Container>
      ) : null}
    </>
  );
}
