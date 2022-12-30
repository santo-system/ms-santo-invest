import AppGenericError from '@shared/errors/AppGenericError';
import { NextFunction, Request, Response } from 'express';

export const errorMiddleware = (
  error: Error | AppGenericError,
  request: Request,
  response: Response,
  next: NextFunction,
) => {
  const { method, url } = request;
  const errorTemplate = {
    timestamp: new Date(),
    method,
    path: url,
    error,
  };
  console.error(JSON.stringify(errorTemplate));

  if (error instanceof AppGenericError) {
    return response.status(error.statusCode).json({
      timestamp: errorTemplate.timestamp,
      path: errorTemplate.path,
      ...error,
    });
  }

  return response.status(500).json({
    timestamp: errorTemplate.timestamp,
    path: errorTemplate.path,
    message: 'Internal Server Error',
    statusCode: 500,
  });
};
