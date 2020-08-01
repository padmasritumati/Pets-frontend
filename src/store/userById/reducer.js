const initialState = {};

export default (state = initialState, action) => {
  switch (action.type) {
    case "USER_BY_ID":
      return { ...state, ...action.payload };

    default:
      return state;
  }
};