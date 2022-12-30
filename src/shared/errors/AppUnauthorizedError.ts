import AppGenericError from './AppGenericError';

class AppUnauthorizedError extends AppGenericError {
  public readonly message: string;
  public readonly statusCode: number;

  constructor(message: string) {
    super(message, 401);
  }
}

export default AppUnauthorizedError;
