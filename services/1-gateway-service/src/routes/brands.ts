import express, { Router } from 'express';

import { create_brand } from '@gateway/controllers/brands.controller';

const router: Router = express.Router();

export const brandsRoutes = (): Router => {
  router.post('/brand/create', create_brand);

  return router;
};
