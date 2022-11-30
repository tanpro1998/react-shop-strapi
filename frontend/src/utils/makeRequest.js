import axios from "axios";
import { appUrl, apiToken } from "./url";

export const makeRequest = axios.create({
  baseURL: appUrl,
  headers: {
    Authorization: "bearer " + apiToken,
  },
});
