import http from 'http';
import { Application, json } from 'express';
import { config } from '@auth/config';
import { appRoutes } from './routes';

import winstonLogger from '@auth/utils/logger';

const port = config.PORT;
const logger = winstonLogger('debug');

export function start(app: Application) {
  appConfig(app);
  routes(app);
  server(app);
}

function appConfig(app: Application) {
  app.use(json());
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
