import express, { Router } from 'express';

import { createOrder } from '@order/controllers/orders.controller';

const router: Router = express.Router();

export const ordersRoutes = (): Router => {
  router.post('/create_order', createOrder);
  return router;
};
