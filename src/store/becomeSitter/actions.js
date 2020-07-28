import { apiUrl } from "../../config/constants";
import axios from "axios";

export const ADDRESS = "ADDRESS";
export const PHONE = "PHONE";
export const SERVICES = "SERVICES";
export const IMAGE="IMAGE"
export const BECOMESITTER="BECOMESITTER"

export const setAddress = (house_number, street, city, postcode, country) => ({
  type: ADDRESS,
  payload: {
    house_number,
    street,
    city,
    postcode,
    country,
  },
});

export const setPhone = (phone_number,image) => ({
  type: PHONE,
  payload: { phone_number,image },
});



export const setServices = (services) => ({
  type: SERVICES,
  payload: services,
});

export const setBecomeSitter=(sitter)=>({
  type:BECOMESITTER,
  payload:sitter
})

export const becomeSitter = (sitter) => {
  console.log("action",sitter)
  return async (dispatch, getState) => {
    //dispatch(appLoading());
    try {
      const response = await axios.post(`${apiUrl}/become_a_sitter`, {
        sitter
      });
      console.log(response)
      dispatch(setBecomeSitter(response.data));
      //dispatch(showMessageWithTimeout("success", true, "account created"));
      //dispatch(appDoneLoading());
    } catch (error) {
      if (error.response) {
        console.log(error.response.data.message);
        //dispatch(setMessage("danger", true, error.response.data.message));
      } else {
        console.log(error.message);
        //dispatch(setMessage("danger", true, error.message));
      }
      //dispatch(appDoneLoading());
    }
  };
};