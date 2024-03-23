import http from 'http';
import { Application, json } from 'express';
import { config } from '@details/config';
import { appRoutes } from './routes';

import winstonLogger from '@details/utils/logger';

import { createConnection } from '@details/queue/connection';
import { createDetailsUserConsume } from '@details/queue/details.consume';

import { Channel } from 'amqplib';

const port = config.PORT;
const logger = winstonLogger('debug');

export let detailsChannel: Channel;

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
  detailsChannel = (await createConnection()) as Channel;
  createDetailsUserConsume(detailsChannel);
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
    logger.info(`Gatway server has started with process id ${process.pid}`);
    httpServer.listen(port, () => {
      logger.info(`Gatway server running on port ${port}`);
    });
  } catch (error) {
    logger.error('htppServer method error :', error);
  }
}
