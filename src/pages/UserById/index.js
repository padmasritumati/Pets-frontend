import React, { useEffect } from "react";
import { setuserById } from "../../store/userById/actions";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { selectUserById } from "../../store/userById/selectors";
import { Container, Row, Image, Col } from "react-bootstrap";
import Review from "../../components/Review";
import ReviewList from "../../components/Review/ReviewList";
import { reviewsSelector } from "../../store/Review/selectors";
import StarRatings from "react-star-ratings";
import DisplayServices from "../../components/DisplayServices";

export default function SitterById() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const sitter = useSelector(selectUserById);
  const address = sitter.address ? sitter.address : {};
  const service = sitter.service ? sitter.service : {};
  const reviwe = useSelector(reviewsSelector);

  const reviewsFiltered = reviwe.filter((r) => {
    return parseInt(id) === r.sitterUserId;
  });

  const averageOfRating = parseInt(
    reviewsFiltered.reduce((total, next) => total + next.rating, 0) /
      reviewsFiltered.length
  );

  useEffect(() => {
    dispatch(setuserById(id));
  }, [dispatch, id]);

  return (
    <>
      <Container>
        <Row className="mt-5 mb-3">
          <Image
            src={sitter.image}
            rounded
            alt="171x180"
            width={171}
            height={180}
          />
          <Col>
            <h2>{sitter.full_name}</h2>
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
          full_name={sitter.full_name}
        />
        <Row></Row>
        <ReviewList></ReviewList>
        <Review> </Review>
      </Container>
    </>
  );
}
