import { apiUrl, DEFAULT_PAGINATION_LIMIT } from "../../config/constants";
import axios from "axios";
import { showMessageWithTimeout } from "../appState/actions";

export const SERVICES_SUCCESS = "SERVICES_SUCCESS";

export const service_success = (serviceList) => ({
  type: SERVICES_SUCCESS,
  payload: serviceList,
});

export const getServices = (type, service, size, lat, lng) => {
  return async (dispatch, getState) => {
    try {
      console.log("from action",type, service, size, lat, lng)
      const response = await axios.get(
        `${apiUrl}/search_sitters/${type}/${service}/${size}/${lat}/${lng}`
      );
      console.log("from action",response.data)
      dispatch(service_success(response.data.filteredList));
    } catch (e) {
      console.log("error", e);
      if (e.message === "Request failed with status code 404") {
        dispatch(
          showMessageWithTimeout(
            "warning",
            true,
            "There are not candidates in this area"
          )
        );
      } else {
        dispatch(
          showMessageWithTimeout("danger", true, "Something went wrong")
        );
      }
    }
  };
};
