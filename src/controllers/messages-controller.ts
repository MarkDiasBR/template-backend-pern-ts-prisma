import { Request, Response } from 'express';
import { getMessages } from '@/services/messages-service';
import { notFound } from '@/errors';

export async function getAllMessages(req: Request, res: Response) {
  const messages = await getMessages();
  if (messages.length === 0) throw notFound();
  res.send(messages);
}
