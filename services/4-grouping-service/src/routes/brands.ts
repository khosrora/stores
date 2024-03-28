import express, { Router } from 'express';

// ! controllers
import { createBrand } from '@grouping/controllers/brand.controller';

const router: Router = express.Router();

export const brandsRoutes = (): Router => {
  router.post('/create_brand', createBrand);

  return router;
};
