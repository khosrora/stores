import express, { Router } from 'express';

import { test, createOrder } from '@gateway/controllers/orders.controller';
import checkAccessToken from '@gateway/middleware/authMiddleware';

const router: Router = express.Router();

export const orderRoutes = (): Router => {
  router.get('/orders/health_orders/', test);
  router.post('/orders/create_order/', checkAccessToken, createOrder);

  return router;
};
