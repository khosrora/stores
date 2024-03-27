import express, { Router } from 'express';

import { edit, deleteAddress, editAddress } from '@gateway/controllers/details.controller';

const router: Router = express.Router();

export const detailsRoutes = (): Router => {
  router.patch('/details/edit/:id', edit);
  router.patch('/details/edit_address/:id', edit);

  router.delete('/details/delete_address/:id/:addressId', deleteAddress);
  router.put('/details/edit_address/:id/:addressId', editAddress);

  return router;
};
