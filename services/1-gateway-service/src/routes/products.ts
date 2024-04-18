import express, { Router } from 'express';

import {
  getAll,
  create,
  isActive,
  addAttributes,
  addSpecifications,
  deleteAttributes,
  deleteSpecifications,
  addTypes,
  deleteTypes
} from '@gateway/controllers/products.controller';
import checkAccessToken from '@gateway/middleware/authMiddleware';

const router: Router = express.Router();

export const productsRoutes = (): Router => {
  router.get('/products/get_all_products', getAll);
  router.post('/products/create', checkAccessToken, create);
  router.get('/products/isActive/:id', checkAccessToken, isActive);

  router.post('/products/addAttributes/:id', checkAccessToken, addAttributes);
  router.post('/products/addSpecifications/:id', checkAccessToken, addSpecifications);

  router.delete('/products/deleteAttributes/:id/:attrId', checkAccessToken, deleteAttributes);
  router.delete('/products/deleteSpecifications/:id/:specId', checkAccessToken, deleteSpecifications);

  router.post('/products/addTypes/:id', checkAccessToken, addTypes);
  router.delete('/products/deleteTypes/:id/:typesId', checkAccessToken, deleteTypes);

  return router;
};
