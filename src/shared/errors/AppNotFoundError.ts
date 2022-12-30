import AppGenericError from './AppGenericError';

class AppNotFoundError extends AppGenericError {
  public readonly message: string;
  public readonly statusCode: number;

  constructor(message: string) {
    super(message, 404);
  }
}

export default AppNotFoundError;
