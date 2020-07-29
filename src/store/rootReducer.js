import { combineReducers } from "redux";
import appState from "./appState/reducer";
import user from "./user/reducer";
import becomeSitter from "./becomeSitter/reducer";

export default combineReducers({
  appState,
  user,
  becomeSitter,
});
