import express, { Router } from 'express';

import {
  create,
  create_subCategory,
  get_all_categories,
  get_category,
  edit_category,
  delete_category
} from '@gateway/controllers/categories.controller';

const router: Router = express.Router();

export const categoriesRoutes = (): Router => {
  router.post('/category/create', create);
  router.post('/category/create/:id', create_subCategory);

  router.get('/category/:id', get_category);
  router.get('/category/get_all', get_all_categories);

  router.patch('/category/edit/:id', edit_category);
  router.delete('/category/delete/:id', delete_category);

  return router;
};
