import express, { Router } from 'express';

import { create_brand, edit_brand, add_branch, delete_branch, edit_branch } from '@gateway/controllers/brands.controller';

const router: Router = express.Router();

export const brandsRoutes = (): Router => {
  router.post('/brand/create', create_brand);
  router.patch('/brand/edit_brand/:id', edit_brand);
  router.post('/brand/add_branch/:id', add_branch);
  router.delete('/brand/delete_branch/:id/:idBranch', delete_branch);
  router.patch('/brand/edit_branch/:id/:idBranch', edit_branch);

  return router;
};
