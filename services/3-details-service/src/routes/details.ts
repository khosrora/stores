import express, { Router } from 'express';

// ! controllers
import { editDetails, deleteAddressDetails, editAddressDetails } from '@details/controllers/details.controller';

const router: Router = express.Router();

export const detailsRoutes = (): Router => {
  router.patch('/edit/:id', editDetails);
  router.delete('/edit_address/:id/:addressId', deleteAddressDetails);
  router.put('/edit_address/:id/:addressId', editAddressDetails);

  return router;
};
