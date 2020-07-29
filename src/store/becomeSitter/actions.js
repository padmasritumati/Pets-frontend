import { apiUrl } from "../../config/constants";
import axios from "axios";

export const ADDRESS = "ADDRESS";
export const PHONE = "PHONE";
export const SERVICES = "SERVICES";


export const setAddress = (address) => ({
  type: ADDRESS,
  payload: address,
});

export const setPhone = (phone) => ({
  type: PHONE,
  payload: phone,
});

export const setServices = (services) => ({
  type: SERVICES,
  payload: services,
});


export const address = (house_number, street, city, postcode, country) => {
  return async (dispatch, getState) => {
    try {
      const token = getState().user.token;

      const response = await axios.post(
        `${apiUrl}/become_a_sitter/address`,
        {
          house_number,
          street,
          city,
          postcode,
          country,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      dispatch(setAddress(response.data));
    } catch (error) {
      console.log(error.message);
    }
  };
};

export const phone = (phone, image) => {
  return async (dispatch, getState) => {
    try {
      const token = getState().user.token;
      console.log("token",token)

      const response = await axios.post(
        `${apiUrl}/become_a_sitter/phone`,
        {
          phone,
          image,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      dispatch(setPhone(response.data));
    } catch (error) {
      console.log(error.message);
    }
  };
};

export const service = (services) => {
  return async (dispatch, getState) => {
    try {
      const token = getState().user.token;

      const response = await axios.post(
        `${apiUrl}/become_a_sitter/services`,
        services,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      dispatch(setAddress(response.data));
    } catch (error) {
      console.log(error.message);
    }
  };
};


