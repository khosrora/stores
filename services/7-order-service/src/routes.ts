import { Application } from 'express';
import { config } from '@order/config';

import { ordersRoutes } from '@order/routes/ordersRoutes';
import { healthRoutes } from './routes/health';

const BASE_PATH: string = config.BASE_PATH_PRODUCT!;

export const appRoutes = (app: Application): void => {
  app.use(BASE_PATH, healthRoutes());
  app.use(BASE_PATH, ordersRoutes());
};
