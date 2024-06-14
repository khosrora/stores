import { Application } from 'express';
import { config } from '@gateway/config';
import { healthRoutes } from '@gateway/routes/health';
import { authRoutes } from './routes/auth';
import { detailsRoutes } from './routes/details';
import { categoriesRoutes } from './routes/categories';
import { brandsRoutes } from './routes/brands';
import { productsRoutes } from './routes/products';
import { orderRoutes } from './routes/orders';
import { blogRoutes } from './routes/blogs';

const BASE_PATH: string = config.BASE_PATH!;

export const appRoutes = (app: Application): void => {
  app.use(BASE_PATH, healthRoutes());
  app.use(BASE_PATH, authRoutes());
  app.use(BASE_PATH, detailsRoutes());
  app.use(BASE_PATH, categoriesRoutes());
  app.use(BASE_PATH, brandsRoutes());
  app.use(BASE_PATH, productsRoutes());
  app.use(BASE_PATH, orderRoutes());
  app.use(BASE_PATH, blogRoutes());
};
