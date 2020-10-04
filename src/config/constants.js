export const DEFAULT_MESSAGE_TIMEOUT = 3000;
export const DEFAULT_PAGINATION_LIMIT = 10;
export const apiKeyGoogle = process.env.REACT_APP_GOOGLE_API;
export const ENV = process.env.NODE_ENV || "development";
export const apiUrl =
  ENV === "production"
    ? "https://pets2020.herokuapp.com"
    : "http://localhost:4000";
