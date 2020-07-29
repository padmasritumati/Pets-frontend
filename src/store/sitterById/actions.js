import axios from "axios";
import { apiUrl } from "../../config/constants";

export const SITTER_BY_ID="SITTER_BY_ID"

export const setSitterById=(sitter)=>({
  type:SITTER_BY_ID,
  payload:sitter
})

export const sitterById = (id) => {
  return async (dispatch, getState) => {
    const response = await axios.get(`${apiUrl}/sitter/${id}`);
    console.log(response.data)
    dispatch(setSitterById(response.data.sitter));
  };
};

