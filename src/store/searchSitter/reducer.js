const initialState = [];

export default (state = initialState, action) => {
  switch (action.type) {
    case "SERVICES_SUCCESS":
      return [ ...state, ...action.payload ];

    default:
      return state;
  }
};
