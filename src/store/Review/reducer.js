const initialState = [];

export default (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_REVIEWS":
      return action.payload;
    case "ADD_REVIWES":
      return action.payload;

    default:
      return state;
  }
};
