import { getMessagesFromDatabase } from '@/repositories/messages-repository';

export async function getMessages() {
  const messages = await getMessagesFromDatabase();
  return messages;
}
