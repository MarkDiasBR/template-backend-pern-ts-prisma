import supertest from 'supertest';
import httpStatus from 'http-status';
import app from '@/app';
import prisma from '@/database';
import { createMessage } from '#/factories/message-factory';

const api = supertest(app);

describe('Integration Tests', () => {
  beforeEach(async () => {
    await prisma.message.deleteMany();
  });

  afterAll(async () => {
    await prisma.message.deleteMany();
    await prisma.$disconnect();
  });

  it("should return 200 and I'm ok!", async () => {
    const { text, status } = await api.get('/health');
    expect(status).toBe(httpStatus.OK);
    expect(text).toBe("I'm ok!");
  });

  it('should return all messages', async () => {
    //Arrange
    await createMessage();
    await createMessage();

    //Act
    const { body, status } = await api.get('/messages');

    //Assert
    expect(status).toBe(httpStatus.OK);
    expect(body).toHaveLength(2);
    expect(body).toEqual(
      expect.arrayContaining([
        expect.objectContaining({
          id: expect.any(Number),
          text: expect.any(String),
        }),
      ]),
    );
  });
});
