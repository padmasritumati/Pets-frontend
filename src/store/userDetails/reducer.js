
const initialState = {};

export default (state = initialState, action) => {
  switch (action.type) {
    case "SERVICES":
      return { ...state, ...action.payload };

    case "PETS":
      
      return { ...state, ...action.payload };

    default:
      return state;
  }
};
