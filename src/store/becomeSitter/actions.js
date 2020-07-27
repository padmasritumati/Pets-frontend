//import { apiUrl } from "../../config/constants";
//import axios from "axios";

export const ADDRESS = "ADDRESS";
export const PHONE = "PHONE";

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

export const setPhone=(phone_number)=>({
  type:PHONE,
  payload:{phone_number}
})
