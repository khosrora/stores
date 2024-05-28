import express, { Router } from 'express';

import { test } from '@gateway/controllers/orders.controller';

const router: Router = express.Router();

export const orderRoutes = (): Router => {
  router.get('/orders/health_orders/', test);

  return router;
};
