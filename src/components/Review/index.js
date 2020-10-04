import React, { useState, useEffect } from "react";
import StarRatings from "react-star-ratings";
import { Row, Form, Button } from "react-bootstrap";
import { addReviews, getReviews } from "../../store/Review/action";
import { useDispatch, useSelector } from "react-redux";
import { selectToken } from "../../store/user/selectors";
import { useParams } from "react-router-dom";

export default function Review() {
  const { id } = useParams();
  const [rating, set_rating] = useState(0);
  const [comment, set_comment] = useState("");
  const dispatch = useDispatch();
  const token = useSelector(selectToken);

  useEffect(() => {
    dispatch(getReviews());
  }, [dispatch, token]);

  const clickHandler = () => {
    dispatch(addReviews(rating, comment, id));
    set_rating(0);
    set_comment("");
  };

  function changeRating(newRating, name) {
    set_rating(newRating);
  }

  return (
    <>
      {token ? (
        <div>
          <h2>Leave a review</h2>
          <Form className="form">
            <Form.Group>
              <Row>
                <h3>Rating</h3>
              </Row>

              <Row>
                {" "}
                <StarRatings
                  rating={rating}
                  starRatedColor="#ebcc34"
                  changeRating={changeRating}
                  numberOfStars={5}
                  name="rating"
                  starDimension="35px"
                  starSpacing="5px"
                />
              </Row>
            </Form.Group>
            <Form.Group>
              <Row>
                <Form.Label>
                  <h3>Comment</h3>
                </Form.Label>
              </Row>
              <Row>
                <textarea
                  name="Comment"
                  rows="3"
                  value={comment}
                  onChange={(e) => set_comment(e.target.value)}
                ></textarea>
              </Row>
            </Form.Group>
            <Button variant="outline-dark" onClick={clickHandler}>
              Submit
            </Button>
          </Form>
        </div>
      ) : null}
    </>
  );
}
