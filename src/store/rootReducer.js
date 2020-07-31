import { combineReducers } from "redux";
import appState from "./appState/reducer";
import user from "./user/reducer";
import userDetails from "./userDetails/reducer";
import searchSitter from "./searchSitter/reducer";
import sitterById from "./sitterById/reducer"
import reviews from "./Review/reducer"

export default combineReducers({
  appState,
  user,
  userDetails,
  searchSitter,
  sitterById,
  reviews
});
