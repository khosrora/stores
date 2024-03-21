import { Application } from 'express';
import http from 'http';
import winstonLogger from '@gateway/utils/logger';
import { config } from '@gateway/config';

const port = config.PORT;
const logger = winstonLogger('debug');

export function start(app: Application) {
  server(app);
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
