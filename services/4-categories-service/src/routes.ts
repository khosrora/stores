import { Application } from 'express';
import { config } from '@categories/config';
import { healthRoutes } from '@categories/routes/health';
import { categoriesRoutes } from '@categories/routes/categories';

const BASE_PATH: string = config.BASE_PATH!;

export const appRoutes = (app: Application): void => {
  app.use(BASE_PATH, healthRoutes());
  app.use(BASE_PATH, categoriesRoutes());
};