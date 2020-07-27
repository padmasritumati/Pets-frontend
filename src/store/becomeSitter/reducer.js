import {ADDRESS} from "./actions"


const initialState;


export default (state = initialState, action)=> {
  switch (action.type) {
    case "ADDRESS": {
      return { ...state, ...action.payload };
    }
    default: {
      return state;
    }
  }
}

