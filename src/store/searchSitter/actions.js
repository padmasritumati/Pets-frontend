import { apiUrl, DEFAULT_PAGINATION_LIMIT } from "../../config/constants";
import axios from "axios";

export const SERVICES_SUCCESS = "SERVICES_SUCCESS";

export const service_success = (serviceList) => ({
  type: SERVICES_SUCCESS,
  payload: serviceList,
});

export const getServices = (radio,service,size,lat,lng) => {
  return async (dispatch, getState) => {
    const serviceListCount = getState().searchSitter.length;
    const response = await axios.get(
      `${apiUrl}/search_sitters?limit=${DEFAULT_PAGINATION_LIMIT}&offset=${serviceListCount}&type=${radio}
      &service=${service}&size=${size}&lat=${lat}&lng=${lng}`
    );

    dispatch(service_success(response.data.users.rows));
  };
};
