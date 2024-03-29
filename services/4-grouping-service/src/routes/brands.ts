import express, { Router } from 'express';

// ! controllers
import { createBrand, editBrand, addBranch, deleteBranch, editBranch } from '@grouping/controllers/brand.controller';

const router: Router = express.Router();

export const brandsRoutes = (): Router => {
  router.post('/create_brand', createBrand);
  router.patch('/edit_brand/:id', editBrand);
  router.post('/add_branch/:id', addBranch);
  router.delete('/delete_branch/:id/:branchId', deleteBranch);
  router.patch('/edit_branch/:id/:branchId', editBranch);

  return router;
};
