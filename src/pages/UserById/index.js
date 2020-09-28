import React, { useEffect } from "react";
import { userById } from "../../store/userById/actions";
import { useDispatch, useSelector } from "react-redux";
import { useParams, Link } from "react-router-dom";
import { selectUserById } from "../../store/userById/selectors";
import { Container, Row, Image, Col, Button } from "react-bootstrap";
import Review from "../../components/Review";
import ReviewList from "../../components/Review/ReviewList";
import { reviewsSelector } from "../../store/Review/selectors";
import StarRatings from "react-star-ratings";
//import DisplayServices from "../../components/DisplayServices";
import { getaddress, getservice } from "../../store/userDetails/actions";
import { selectToken } from "../../store/user/selectors";

export default function SitterById() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const user = useSelector(selectUserById);
  const token = useSelector(selectToken);

  const address = user.address ? user.address : {};
  const service = user.service ? user.service : {};

  const reviwe = useSelector(reviewsSelector);

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
      <Container>
        <Row className="mt-5 mb-3">
          <Image src={user.image} width={171} height={180} roundedCircle />
          <Col>
            <h1>{user.full_name}</h1>
            <h3>
              {address.street},{address.city},{address.postcode}
            </h3>
            <StarRatings
              rating={averageOfRating ? averageOfRating : 0}
              starRatedColor="#000000"
              starEmptyColor="grey"
              starDimension="20px"
              starSpacing="5px"
            />
          </Col>
        </Row>
        {token ? (
          <Row>
            <Link to={`/contact/${user.id}`}>
              <Button variant="outline-dark" className="mb-4" >Contact {user.full_name}</Button>
            </Link>
          </Row>
        ) : null}
      </Container>
      <h1 className="headerdashboard"> services</h1>
     {/** <Container>
        <DisplayServices
          boarding={service.boarding}
          houseSitting={service.houseSitting}
          dropInVisits={service.dropInVisits}
          doggyDayCare={service.doggyDayCare}
          dogWalking={service.dogWalking}
          boardingRate={service.boardingRate}
          houseSittingRate={service.houseSittingRate}
          dropInVisitsRate={service.dropInVisitsRate}
          doggyDayCareRate={service.doggyDayCareRate}
          dogWalkingRate={service.dogWalkingRate}
          small={service.small}
          medium={service.medium}
          large={service.large}
          gaint={service.gaint}
          cat={service.cat}
          full_name={user.full_name}
        />
        <Row></Row>
     </Container>**/}

      <ReviewList></ReviewList>

      <Review> </Review>
    </>
  );
}
