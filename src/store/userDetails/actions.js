import { apiUrl } from "../../config/constants";
import axios from "axios";

export const ADDRESS = "ADDRESS";
export const PHONE = "PHONE";
export const SERVICES = "SERVICES";
export const PETS = "PETS";

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

export const setPets = (pets) => ({
  type: PETS,
  payload: pets,
});

export const address = (house_number, street, city, postcode, country) => {
  return async (dispatch, getState) => {
    try {
      const token = getState().user.token;

      const response = await axios.post(
        `${apiUrl}/user_details/address`,
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
      console.log("token", token);

      const response = await axios.post(
        `${apiUrl}/user_details/phone`,
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
        `${apiUrl}/user_details/services`,
        services,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      dispatch(setServices(response.data));
    } catch (error) {
      console.log(error.message);
    }
  };
};

export const pet = (
  type,
  name,
  weight,
  breed,
  ageInYears,
  ageInMonths,
  sex
) => {
  return async (dispatch, getState) => {
    try {
      const token = getState().user.token;

      const response = await axios.post(
        `${apiUrl}/user_details/pets`,{
        type,
        name,
        weight,
        breed,
        ageInYears,
        ageInMonths,
        sex},
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      dispatch(setPets(response.data));
    } catch (error) {
      console.log(error.message);
    }
  };
};
