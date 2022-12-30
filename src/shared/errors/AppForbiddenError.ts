import AppGenericError from './AppGenericError';

class AppForbiddenError extends AppGenericError {
  public readonly message: string;
  public readonly statusCode: number;

  constructor(message: string) {
    super(message, 403);
  }
}

export default AppForbiddenError;
