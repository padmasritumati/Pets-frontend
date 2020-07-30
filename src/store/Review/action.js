import { apiUrl } from "../../config/constants";
import axios from "axios";

export const FETCH_REVIEWS = "FETCH_REVIEWS";
export const ADD_REVIWES = "ADD_REVIWES";

export const fetch_reviews = (reviews) => ({
  type: FETCH_REVIEWS,
  payload: reviews,
});

export const add_reviews = (review) => ({
  type: ADD_REVIWES,
  payload: review,
});

export const getReviews = () => {
  return async (dispatch, getState) => {
    try {
      const response = await axios.get(`${apiUrl}/review`);

      dispatch(fetch_reviews(response.data));
    } catch (e) {
      console.log("error", e.message);
    }
  };
};

export const addReviews = (rating, review_description, sitterUserId) => {
  return async (dispatch, getState) => {
    try {
      const token = getState().user.token;

      const response = await axios.post(
        `${apiUrl}/review/`,
        {
          rating,
          review_description,
          sitterUserId,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      dispatch(add_reviews(response.data));
    } catch (error) {
      console.log(error.message);
    }
  };
};
