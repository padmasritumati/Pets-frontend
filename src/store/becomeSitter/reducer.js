//import {ADDRESS,PHONE} from "./actions";

const initialState = {};

export default (state = initialState, action) => {
  switch (action.type) {
    case "ADDRESS": {
      return { ...state, ...action.payload };
    }
    case "PHONE": {
      //state["phone_number"] = action.payload.phone_number;
      return { ...state, ...action.payload };
    }
    default: {
      return state;
    }
  }
};
