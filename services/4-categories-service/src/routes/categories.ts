import express, { Router } from 'express';

// ! controllers
import {
  createCategory,
  createSubCategory,
  getAll,
  get,
  editCategory,
  deleteCategory
} from '@categories/controllers/categories.controller';
import { config } from '@categories/config';

const router: Router = express.Router();

console.log(config.BASE_PATH + '/create_parent');

export const categoriesRoutes = (): Router => {
  router.post('/create_parent', createCategory);
  router.post('/create_parent/:id', createSubCategory);

  router.get('/get_all', getAll);

  router.get('/:id', get);
  router.delete('/:id', deleteCategory);
  router.patch('/edit/:id', editCategory);

  return router;
};
