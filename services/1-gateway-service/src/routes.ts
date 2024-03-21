import { Application } from 'express';
import { config } from '@gateway/config';
import { healthRoutes } from '@gateway/routes/health';
import { authRoutes } from './routes/auth';

const BASE_PATH: string = config.BASE_PATH!;

export const appRoutes = (app: Application): void => {
  app.use(BASE_PATH, healthRoutes());
  app.use(BASE_PATH, authRoutes());
};
