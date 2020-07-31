//import {ADDRESS,PHONE,SERVICES} from "./actions";

const initialState = {};

export default (state = initialState, action) => {
  switch (action.type) {
    case "ADDRESS":
      return { ...state, ...action.payload };

    case "PHONE":
      return { ...state, ...action.payload };

    case "SERVICES":
      return { ...state, ...action.payload };

    case "PETS":
      return { ...state, ...action.payload };

    default:
      return state;
  }
};
