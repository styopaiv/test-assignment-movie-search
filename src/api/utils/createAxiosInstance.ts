import axios, { AxiosTransformer } from "axios";

import { snakeCaseToCamel } from "./snakeCaseToCamel";
import { ApiClientConfig } from "../ApiClient";

export const createAxiosInstance = (config: ApiClientConfig) => {
  const defaultAxiosTransformers = axios.defaults.transformResponse as AxiosTransformer[];

  return axios.create({
    baseURL: config.url,
    headers: { Authorization: `Bearer ${config.token}` },
    transformResponse: defaultAxiosTransformers.concat(snakeCaseToCamel),
    withCredentials: false,
  });
};
