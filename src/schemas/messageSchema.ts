import Joi from 'joi';
import { CreateMessageBody } from '@/repositories/messages-repository';

export const messageSchema = Joi.object<CreateMessageBody>({
  text: Joi.string().required(),
});
