import { apiUrl } from "../../config/constants";
import axios from "axios";
import { selectToken } from "../user/selectors";

export const SERVICES = "SERVICES";
export const PETS = "PETS";
export const ALLPETS = "ALLPETS";
export const UPDATEPET = "UPDATEPET";
export const DELECTPETS = "DELECTPETS";

export const setServices = (services) => ({
  type: SERVICES,
  payload: services,
});

export const setPets = (pets) => ({
  type: PETS,
  payload: pets,
});

export const allPets = (pets) => ({
  type: ALLPETS,
  payload: pets,
});
export const upadtePetSuccess = (pets) => {
  return {
    type: DELECTPETS,
    payload: pets,
  };
};
export const deletePetSuccess = (pets) => {
  return {
    type: DELECTPETS,
    payload: pets,
  };
};

export const getservice = () => {
  return async (dispatch, getState) => {
    const token = getState().user.token;
    const response = await axios.get(`${apiUrl}/user_details/service`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    //console.log(response,"services")
    dispatch(setServices(response.data));
  };
};

export const getpets = () => {
  return async (dispatch, getState) => {
    const token = getState().user.token;
    const response = await axios.get(`${apiUrl}/user_details/pet`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    //console.log("from action get methode", response.data);
    dispatch(setPets(response.data));
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
  sex,
  image
) => {
  return async (dispatch, getState) => {
    try {
      const token = getState().user.token;

      const response = await axios.post(
        `${apiUrl}/user_details/pets`,
        {
          type,
          name,
          weight,
          breed,
          ageInYears,
          ageInMonths,
          sex,
          image,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      dispatch(allPets(response.data));
    } catch (error) {
      console.log(error.message);
    }
  };
};

export const updatePet = (
  id,
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

      const response = await axios.patch(
        `${apiUrl}/user_details/pets/${id}`,
        {
          id,
          name,
          weight,
          breed,
          ageInYears,
          ageInMonths,
          sex,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      dispatch(upadtePetSuccess(response.data));
    } catch (error) {
      console.log(error.message);
    }
  };
};

export const delectPet = (id) => {
  console.log("from action id", id);
  return async (dispatch, getState) => {
    const token = selectToken(getState());
    try {
      const response = await axios.delete(`${apiUrl}/user_details/${id}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      console.log("action", response.data);
      dispatch(deletePetSuccess(response.data));
    } catch (e) {
      console.log(e);
    }
  };
};
