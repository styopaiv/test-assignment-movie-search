import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as t from "io-ts";

import { createAxiosInstance } from "./utils/createAxiosInstance";
import { validateData } from "./utils/validateData";

export interface ApiClientConfig {
  url: string;
  token: string;
}

export class ApiClient {
  protected axiosInstance: AxiosInstance;

  constructor(config: ApiClientConfig) {
    this.axiosInstance = createAxiosInstance(config);
  }

  protected createRequest<ReqT, RespT>(
    requestConfig: Required<Pick<AxiosRequestConfig, "method" | "url">>,
    requestType: t.Mixed,
    responseType: t.Mixed,
  ) {
    return (requestData: ReqT) => {
      validateData(requestType, requestData);

      const requestPromise = this.axiosInstance.request({ ...requestConfig, params: requestData });

      return requestPromise.then(
        (response): RespT => {
          validateData(responseType, response.data);

          return response.data;
        },
      );
    };
  }
}
