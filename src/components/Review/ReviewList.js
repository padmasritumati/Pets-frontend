import React from "react";
import { reviewsSelector } from "../../store/Review/selectors";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import DisplayReview from "./DisplayReview";

export default function Review({ image, name, dateCreated, rating, comment }) {
  const reviewList = useSelector(reviewsSelector);
  const { id } = useParams();

  const reviewsListToDisplay = reviewList.filter((review) => {
    return parseInt(id) === review.sitterUserId;
  });

  if (reviewsListToDisplay.length) {
    reviewsListToDisplay.sort(function compare(a, b) {
      let c = new Date(a.createdAt);
      let d = new Date(b.createdAt);
      return d - c;
    });
  }

  return (
    <>
      {reviewsListToDisplay ? (
        reviewsListToDisplay.length ? (
          <div>
            {" "}
            <h2 className="headerdreview">Reviews ({reviewsListToDisplay.length})</h2>
            {reviewsListToDisplay.map((review, i) => (
              <DisplayReview
                key={i}
                image={review.user.image}
                name={review.user.full_name}
                rating={review.rating}
                comment={review.review_description}
              />
            ))}
          </div>
        ) : (
          <h2 className="headerdreview"> No reviews</h2>
        )
      ) : null}
    </>
  );
}
