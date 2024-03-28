import express, { Router } from 'express';

// ! controllers
import { createCategory, createSubCategory, getAll, get, editCategory, deleteCategory } from '@grouping/controllers/categories.controller';
import { config } from '@grouping/config';

const router: Router = express.Router();


export const categoriesRoutes = (): Router => {
  router.post('/create_parent', createCategory);
  router.post('/create_parent/:id', createSubCategory);

  router.get('/get_all', getAll);

  router.get('/:id', get);
  router.delete('/:id', deleteCategory);
  router.patch('/edit/:id', editCategory);

  return router;
};
