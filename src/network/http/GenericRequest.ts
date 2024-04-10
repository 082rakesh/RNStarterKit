export type headers = {};
export class GenericRequest {
  apiName: string;
  jsonBody?: string;
  httpHeaders?: Map<string, string>;

  constructor(apiName = '', jsonBody = '') {
    this.apiName = apiName;
    this.jsonBody = jsonBody;
    this.httpHeaders;
  }
}
