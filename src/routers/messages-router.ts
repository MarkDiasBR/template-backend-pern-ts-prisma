import { Router } from 'express';
import { getAllMessages } from '@/controllers/messages-controller';

const messageRouter = Router();

messageRouter.get('/', getAllMessages);

export default messageRouter;
