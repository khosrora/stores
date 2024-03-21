import http from 'http';
import { Application } from 'express';
import { config } from '@gateway/config';
import { appRoutes } from './routes';

import winstonLogger from '@gateway/utils/logger';

const port = config.PORT;
const logger = winstonLogger('debug');

export function start(app: Application) {
  routes(app);
  server(app);
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
