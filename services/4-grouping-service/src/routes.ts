import { Application } from 'express';
import { config } from '@grouping/config';
import { healthRoutes } from '@grouping/routes/health';
import { categoriesRoutes } from '@grouping/routes/categories';
import { brandsRoutes } from '@grouping/routes/brands';

const BASE_PATH_CATEGORY: string = config.BASE_PATH_CATEGORY!;
const BASE_PATH_BRAND: string = config.BASE_PATH_BRANDS!;

export const appRoutes = (app: Application): void => {
  app.use('', healthRoutes());
  app.use(BASE_PATH_CATEGORY, categoriesRoutes());
  app.use(BASE_PATH_BRAND, brandsRoutes());
};
