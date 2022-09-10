import axios from "axios";
import { AxiosInstance } from "../../node_modules/axios/index.d";

export const breakingBadApi = (): AxiosInstance => {
  const instance = axios.create({
    baseURL: "https://www.breakingbadapi.com/api/",
  });

  return instance;
};
