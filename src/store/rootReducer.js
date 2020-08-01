import { combineReducers } from "redux";
import appState from "./appState/reducer";
import user from "./user/reducer";
import userDetails from "./userDetails/reducer";
import searchSitter from "./searchSitter/reducer";
import usreById from "./userById/reducer"
import reviews from "./Review/reducer"

export default combineReducers({
  appState,
  user,
  userDetails,
  searchSitter,
  usreById,
  reviews
});
