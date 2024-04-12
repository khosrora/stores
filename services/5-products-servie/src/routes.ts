import { Application } from 'express';
import { config } from '@products/config';

import { productsRoutes } from '@products/routes/productsRoutes';

const BASE_PATH: string = config.BASE_PATH_PRODUCT!;

export const appRoutes = (app: Application): void => {
  app.use(BASE_PATH, productsRoutes());
};
