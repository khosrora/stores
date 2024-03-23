import client, { Channel, Connection } from 'amqplib';

import winstonLogger from '@auth/utils/logger';
import { config } from '@auth/config';

const logger = winstonLogger('debug');

async function createConnection(): Promise<Channel | undefined> {
  try {
    logger.info('try to connect rabbitemq');
    const connection = await client.connect(config.RABBITMQ_URL!);
    const channel = await connection.createChannel();
    logger.info('auth connect to rabbitmq');
    closeConnection(channel, connection);
    return channel;
  } catch (error) {
    console.log(error);
    logger.error('createConnection() method have error');
  }
}

function closeConnection(channel: Channel, connection: Connection) {
  process.once('SIGINT', async () => {
    await channel.close();
    await connection.close();
  });
}

export { createConnection };
