const initialState = [];

export default (state = initialState, action) => {
  switch (action.type) {
    case "SERVICES_SUCCESS":
      console.log("from reducer", state, action.payload);
      return (state = action.payload);
    default:
      return state;
  }
};
