import AppGenericError from './AppGenericError';

class AppBadRequestError extends AppGenericError {
  public readonly message: string;
  public readonly statusCode: number;

  constructor(message: string) {
    super(message, 400);
  }
}

export default AppBadRequestError;
