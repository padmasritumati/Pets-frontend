const initialState = {};

export default (state = initialState, action) => {
  switch (action.type) {
    case "SERVICES":
      return { ...state, ...action.payload };

    case "PETS":
      console.log("from reducer",state,action.payload)
      return {...state, ...action.payload };
    case "ALLPETS":
      console.log("from reducer allpets",state,action.payload)
      return {...state,pets:[...state.pets,action.payload ] };
    default:
      return state;
  }
};
