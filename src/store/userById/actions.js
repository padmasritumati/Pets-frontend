import axios from "axios";
import { apiUrl } from "../../config/constants";

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

