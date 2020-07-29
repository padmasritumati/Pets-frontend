import { combineReducers } from "redux";
import appState from "./appState/reducer";
import user from "./user/reducer";
import becomeSitter from "./becomeSitter/reducer";
import searchSitter from "./searchSitter/reducer";
import sitterById from "./sitterById/reducer"

export default combineReducers({
  appState,
  user,
  becomeSitter,
  searchSitter,
  sitterById
});
