import { Message } from '@prisma/client';
import prisma from '@/database';

export type CreateMessageBody = Omit<Message, 'id'>;

export function getMessagesFromDatabase() {
  return prisma.message.findMany();
}
