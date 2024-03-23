import winstonLogger from '@details/utils/logger';
import { Channel } from 'amqplib';
import { Logger } from 'winston';
import { createConnection } from '@details/queue/connection';

const logger: Logger = winstonLogger('debug');

export async function publishDirectMessage(
  channel: Channel,
  exchangeName: string,
  routingKey: string,
  message: string,
  logMessage: string
) {
  try {
    if (!channel) {
      channel = (await createConnection()) as Channel;
    }
    await channel.assertExchange(exchangeName, 'direct');
    channel.publish(exchangeName, routingKey, Buffer.from(message));
    logger.info(logMessage);
  } catch (error) {
    logger.error('publishDirectMessage() auth have error');
  }
}
