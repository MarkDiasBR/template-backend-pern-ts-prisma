import express, { json, Request, Response } from 'express';
import 'express-async-errors';
import httpStatus from 'http-status';
import messageRouter from '@/routers/messages-router';
import errorHandlerMiddleware from '@/middlewares/error-middleware';

const app = express();

app.use(json());
// app.use(cors());

app.get('/health', (req: Request, res: Response) => {
  return res.status(httpStatus.OK).send("I'm ok!");
});

app.use('/messages', messageRouter);
app.use(errorHandlerMiddleware);

export default app;
