import React, { useEffect } from "react";
import { sitterById } from "../../store/sitterById/actions";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { selectSitterById } from "../../store/sitterById/selectors";
import { Container, Row, Image, Col } from "react-bootstrap";
import Review from "../../components/Review";
//import StarRatings from "react-star-ratings";

export default function SitterById() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const sitter = useSelector(selectSitterById);
  const address = sitter.address ? sitter.address : {};
  const services = sitter.service ? sitter.service : {};

  

  useEffect(() => {
    dispatch(sitterById(id));
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
          </Col>
        </Row>
        <Row className="mt-5 mb-3">
          <h2>Services</h2>
        </Row>

        {services.boarding ? (
          <Row>
            <Col>
              <h3>Boarding</h3>
              <p>in the sitter's home</p>
            </Col>
            <Col>
              <h3>€{services.boardingRate}</h3>
              <p>per nigth</p>
            </Col>
          </Row>
        ) : (
          ""
        )}
        {services.houseSitting ? (
          <Row>
            <Col>
              <h3>House Sitting</h3>
              <p>in your home</p>
            </Col>
            <Col>
              <h3>€{services.houseSittingRate}</h3>
              <p>per nigth</p>
            </Col>
          </Row>
        ) : (
          ""
        )}
        {services.dropInVisits ? (
          <Row>
            <Col>
              <h3>Drop-In Visits</h3>
              <p>visits in your home</p>
            </Col>
            <Col>
              <h3>€{services.dropInVisitsRate}</h3>
              <p>per visit</p>
            </Col>
          </Row>
        ) : (
          ""
        )}
        {services.doggyDayCare ? (
          <Row>
            <Col>
              <h3>Doggy Day Care</h3>
              <p>in the sitter's home</p>
            </Col>
            <Col>
              <h3>€{services.doggyDayCareRate}</h3>
              <p>per day</p>
            </Col>
          </Row>
        ) : (
          ""
        )}
        {services.dogWalking ? (
          <Row>
            <Col>
              <h3>Dog Walking</h3>
              <p>in your neighbourhood</p>
            </Col>
            <Col>
              <h3>€{services.dogWalkingRate}</h3>
              <p>per walk</p>
            </Col>
          </Row>
        ) : (
          ""
        )}
        <Row className="mt-5 mb-3">
          <h2>{sitter.full_name} can host and watch in your home</h2>
        </Row>
        <Row>
          {services.small ? (
            <Col>
              <h3>Small</h3>
              <p>0-7kg</p>
            </Col>
          ) : (
            ""
          )}
          {services.medium ? (
            <Col>
              <h3>Medium</h3>
              <p>8-18kg</p>
            </Col>
          ) : (
            ""
          )}
          {services.large ? (
            <Col>
              <h3>Large</h3>
              <p>18-45kg</p>
            </Col>
          ) : (
            ""
          )}
          {services.gaint ? (
            <Col>
              <h3>Gaint</h3>
              <p>45+ kg</p>
            </Col>
          ) : (
            ""
          )}
          {services.cat ? (
            <Col>
              <h3>Cat</h3>
            </Col>
          ) : (
            ""
          )}
        </Row>
      <Review></Review>
      </Container>
    </>
  );
}
