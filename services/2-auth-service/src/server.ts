import http from 'http';
import { Application, json } from 'express';
import { config } from '@auth/config';
import { appRoutes } from './routes';

import winstonLogger from '@auth/utils/logger';

import { createConnection } from '@auth/queue/connection';
import { Channel } from 'amqplib';

const port = config.PORT;
const logger = winstonLogger('debug');

export let authChannel: Channel;

export function start(app: Application) {
  appConfig(app);
  startQueue();
  routes(app);
  server(app);
}

function appConfig(app: Application) {
  app.use(json());
}

async function startQueue() {
  authChannel = (await createConnection()) as Channel;
}

function routes(app: Application) {
  appRoutes(app);
}

function server(app: Application) {
  const httpServer: http.Server = new http.Server(app);
  htppServer(httpServer);
}

function htppServer(httpServer: http.Server) {
  try {
    logger.info(`Auth server has started with process id ${process.pid}`);
    httpServer.listen(port, () => {
      logger.info(`Auth server running on port ${port}`);
    });
  } catch (error) {
    logger.error('htppServer method error :', error);
  }
}
