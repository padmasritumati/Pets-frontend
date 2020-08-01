import { combineReducers } from "redux";
import appState from "./appState/reducer";
import user from "./user/reducer";
import userDetails from "./userDetails/reducer";
import searchSitter from "./searchSitter/reducer";
import userById from "./userById/reducer"
import reviews from "./Review/reducer"

export default combineReducers({
  appState,
  user,
  userDetails,
  searchSitter,
  userById,
  reviews
});
