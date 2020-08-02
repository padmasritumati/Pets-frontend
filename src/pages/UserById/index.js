import React, { useEffect } from "react";
import { userById } from "../../store/userById/actions";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { selectUserById} from "../../store/userById/selectors";
import {selectAddresss,selectservice} from "../../store/userDetails/selectors"
import { Container, Row, Image, Col } from "react-bootstrap";
import Review from "../../components/Review";
import ReviewList from "../../components/Review/ReviewList";
import { reviewsSelector } from "../../store/Review/selectors";
import StarRatings from "react-star-ratings";
import DisplayServices from "../../components/DisplayServices";
import {getaddress,getservice} from "../../store/userDetails/actions"

export default function SitterById() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const user = useSelector(selectUserById);
  const a=useSelector(selectAddresss);
  const s=useSelector(selectservice);
  const address=a?a:{}
  const service=s?s:{}

  
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
    dispatch(getaddress())
    dispatch(getservice())
  }, [dispatch, id]);

  return (
    <>
     <Container>
        <Row className="mt-5 mb-3">
          <Image
            src={user.image}
            rounded
            alt="171x180"
            width={171}
            height={180}
          />
          <Col>
            <h2>{user.full_name}</h2>
            <p>
              {address.street},{address.city},{address.postcode}
            </p>
            <StarRatings
              rating={averageOfRating ? averageOfRating : 0}
              starRatedColor="#000000"
              starEmptyColor="grey"
              starDimension="20px"
              starSpacing="5px"
            />
          </Col>
        </Row>
        <Row className="mt-5 mb-3">
          <h2>Services</h2>
        </Row>
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
        <ReviewList></ReviewList>
        <Review> </Review>
     </Container>
    </>
  );
}
