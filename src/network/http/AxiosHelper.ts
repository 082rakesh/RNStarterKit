import axios, {AxiosInstance} from 'axios';
import {AxiosError} from 'axios';
import {Logger} from '../../utils/Logger';
// import {BASE_URL} from '../../utils/Constants';

/*
  you can customize axio instance to pass as per your requirement within axios.create()
  It accepts : AxiosRequestConfig
  https://axios-http.com/docs/req_config
*/

// export const apiUrl = axios.create({baseURL: BASE_URL});
export const axioInstance: AxiosInstance = axios.create(); // removed base url because 2 different API set.

axioInstance.interceptors.request.use(
  config => {
    Logger.debug('**************REQUEST[Interceptor]**********************');
    Logger.debug(`RequestHeaders:${config.headers}`);
    Logger.debug(`RequestBody:${config.params}`);
    Logger.debug(`RequestBody:${config.url}`);
    Logger.debug('*************************************************');
    config.metadata = {startTime: new Date()};
    return config;
  },
  error => {
    return Promise.reject(error);
  },
);

// add response interceptor
axioInstance.interceptors.response.use(
  response => {
    const endTime = new Date();
    const duration = endTime - response.config.metadata.startTime;
    Logger.debug('**************RESPONSE START**********************');
    Logger.debug(
      `Response Status:${response.status} Response Status: ${response.config.method}`,
    );
    Logger.debug(`Request to ${response.config.url} took ${duration} ms`);
    Logger.debug('*****************RESPONSE END**********************');

    return response;
  },
  error => {
    const err = error as AxiosError;
    const status = error.response ? error.response.status : null;
    Logger.debug('**************Error RESPONSE[Interceptor]***************');
    Logger.debug(
      `Error response: ${err.code}: ${err.message}: ${err.status} : status is: ${status}`,
    );

    if (status === 401) {
      // Handle unauthorized access
    } else if (status === 404) {
      // Handle not found errors
    } else {
      // Handle other errors
    }
    return Promise.reject(error);
  },
);
