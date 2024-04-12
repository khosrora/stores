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

const router: Router = express.Router();

export const productsRoutes = (): Router => {
  router.get('/products/get_all_products', getAll);
  router.post('/products/create', create);
  router.get('/products/isActive/:id', isActive);

  router.post('/products/addAttributes/:id', addAttributes);
  router.post('/products/addSpecifications/:id', addSpecifications);

  router.delete('/products/deleteAttributes/:id/:attrId', deleteAttributes);
  router.delete('/products/deleteSpecifications/:id/:specId', deleteSpecifications);

  router.post('/products/addTypes/:id', addTypes);
  router.delete('/products/deleteTypes/:id/:typesId', deleteTypes);

  return router;
};
