export class GenericResponse<T> {
  isSuccess?: boolean;
  jsonBody?: string;
  data?: T;

  constructor() {
    this.isSuccess;
    this.jsonBody;
    this.data;
  }
}

export type GenResponse<T> = {
  isSuccess?: boolean;
  jsonBody?: string;
  data?: T;
};
