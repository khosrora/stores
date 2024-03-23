import { Application } from 'express';
import { config } from '@details/config';
import { healthRoutes } from '@details/routes/health';
import { detailsRoutes } from '@details/routes/details';

const BASE_PATH: string = config.BASE_PATH!;

export const appRoutes = (app: Application): void => {
  app.use(BASE_PATH, healthRoutes());
  app.use(BASE_PATH, detailsRoutes());
};
