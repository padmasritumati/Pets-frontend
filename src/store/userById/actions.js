import axios from "axios";
import { apiUrl } from "../../config/constants";

export const USER_BY_ID="USER_BY_ID"

export const setuserById=(sitter)=>({
  type:USER_BY_ID,
  payload:sitter
})

export const userById = (id) => {
  return async (dispatch, getState) => {
    const response = await axios.get(`${apiUrl}/sitter/${id}`);
    console.log("form action",response.data)
    dispatch(setuserById(response.data.sitter));
  };
};

