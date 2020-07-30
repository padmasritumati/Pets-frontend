import React from "react";

import { reviewsSelector } from "../../store/Review/selectors";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

export default function Review({ image, name, dateCreated, rating, comment }) {
  const reviewList = useSelector(reviewsSelector);
  const { id } = useParams();

  const reviewsListToDisplay = reviewList.filter((review) => {
    return parseInt(id) === review.sitterUserId;
  });
  console.log("filteredList", reviewsListToDisplay);

  if (reviewsListToDisplay.length) {
    reviewsListToDisplay.sort(function compare(a, b) {
      let c = new Date(a.createdAt);
      let d = new Date(b.createdAt);
      return d - c;
    });
  }
  console.log("sortedList", reviewsListToDisplay);

  const averageOfRating = parseInt(
    reviewsListToDisplay.reduce((total, next) => total + next.rating, 0) /
      reviewsListToDisplay.length
  );
  console.log(averageOfRating);

  return (
    <>
    {reviewsListToDisplay ? (
      reviewsListToDisplay.length ? (
        <div>
          {" "}
          <h2>Reviews ({reviewsListToDisplay.length})</h2>
          {reviewsListToDisplay.map((review, i) => (
            <Review
              key={i}
              image={review.user.image}
              name={review.user.full_name}
              rating={review.rating}
              comment={review.review_description}
            />
          ))}
        </div>
      ) : (
        <h2>No reviews</h2>
      )
    ) : null}
    </>
  );
}
