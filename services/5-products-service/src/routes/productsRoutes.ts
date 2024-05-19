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
  deleteTypes,
  deleteProduct
} from '@products/controllers/products.controller';

const router: Router = express.Router();

export const productsRoutes = (): Router => {
  router.get('/all_products', getAll);
  router.post('/create_products', create);
  router.get('/isActive/:id', isActive);
  router.delete('/delete/:id', deleteProduct);

  router.post('/addAttributes/:id', addAttributes);
  router.post('/addSpecifications/:id', addSpecifications);

  router.delete('/deleteAttributes/:id/:attrId', deleteAttributes);
  router.delete('/deleteSpecifications/:id/:specId', deleteSpecifications);

  router.post('/addTypes/:id', addTypes);
  router.delete('/deleteTypes/:id/:typesId', deleteTypes);

  return router;
};