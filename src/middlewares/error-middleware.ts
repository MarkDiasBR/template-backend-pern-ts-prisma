import { Request, Response, NextFunction } from 'express';
import httpStatus from 'http-status';

export default function errorHandlerMiddleware(
  error: Error,
  req: Request,
  res: Response,
  next: NextFunction, //eslint-disable-line @typescript-eslint/no-unused-vars
) {
  console.log(error);
  if (error.name === 'Conflict') {
    return res.status(httpStatus.CONFLICT).send(error.message);
  }

  return res.status(httpStatus.INTERNAL_SERVER_ERROR).send('Internal Server Error');
}
