import {axioInstance} from './AxiosHelper';
import {GenericRequest} from './GenericRequest';
import {GenericResponse} from './GenericResponse';

const ApiManager = {
  get: async (request: GenericRequest) => {
    let genericResponse = new GenericResponse();
    try {
      const response = await axioInstance.get(request.apiName);
      genericResponse.isSuccess = true;
      genericResponse.data = await response.data;
      return genericResponse;
    } catch (error) {
      genericResponse.isSuccess = false;
      return genericResponse;
    }
  },
};
export default ApiManager;
