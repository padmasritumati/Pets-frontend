import axios from "axios";
import { apiUrl } from "../../config/constants";
import {showMessageWithTimeout} from "../appState/actions"

export const USER_BY_ID="USER_BY_ID"

export const setuserById=(user)=>({
  type:USER_BY_ID,
  payload:user
})



export const userById = (id) => {
  return async (dispatch, getState) => {
    const response = await axios.get(`${apiUrl}/userById/${id}`);
    console.log("form action",response.data)
    dispatch(setuserById(response.data.user));
  };
};

export const sendEmail=(message,userId,sitterId)=> {
  return async (dispatch, getState) =>{
    try {
      const token = getState().user.token;
      const res = await axios.post(
        `${apiUrl}/userById/contact`,
        {
          mailToId: sitterId,
          message,
          userId,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      console.log(res.data);
      dispatch(
        showMessageWithTimeout("success", true, "Your request was sent!")
      );
    } catch (e) {
      console.log("error", e.message);
      dispatch(showMessageWithTimeout("danger", true, "Something went wrong"));
    }
  };
}


