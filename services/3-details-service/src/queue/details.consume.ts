import { Channel, ConsumeMessage, Replies } from 'amqplib';

import winstonLogger from '@details/utils/logger';
import { createConnection } from '@details/queue/connection';

import { Logger } from 'winston';
import Details from '@details/model/Details.model';

const logger: Logger = winstonLogger('debug');

export const createDetailsUserConsume = async (channel: Channel): Promise<void> => {
  try {
    if (!channel) {
      channel = (await createConnection()) as Channel;
    }

    const exchangeName = 'details-user-id';
    const routingKey = 'auth-details';
    const queueName = 'auth-details-queue';

    await channel.assertExchange(exchangeName, 'direct');
    const storesQueue: Replies.AssertQueue = await channel.assertQueue(queueName, { durable: true, autoDelete: false });
    await channel.bindQueue(storesQueue.queue, exchangeName, routingKey);

    channel.consume(storesQueue.queue, async (msg: ConsumeMessage | null) => {
      try {
        const { id } = JSON.parse(msg!.content.toString());
        await Details.create({
          user: id
        });
        channel.ack(msg!);
      } catch (error) {
        console.log(error);
      }
    });
  } catch (error) {
    logger.error('createDetailsUserConsume() method have error');
  }
};
