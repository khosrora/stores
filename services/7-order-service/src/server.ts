import http from 'http';
import { Application, json } from 'express';
import { config } from '@order/config';
import { appRoutes } from './routes';

import winstonLogger from '@order/utils/logger';
import { checkConnection, createIndex } from '@order/elasticsearch';

const port = config.PORT;
const logger = winstonLogger('debug');

export function start(app: Application) {
  appConfig(app);
  connectToElasticSearch();
  routes(app);
  server(app);
}

function appConfig(app: Application) {
  app.use(json());
}

function connectToElasticSearch() {
  checkConnection();
  createIndex(config.INDEX_ELASTIC_SEARCH!);
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
    logger.info(`order Server has started with process id ${process.pid}`);
    httpServer.listen(port, () => {
      logger.info(`order Server running on port ${port}`);
    });
  } catch (error) {
    logger.error('htppServer method error :', error);
  }
}
