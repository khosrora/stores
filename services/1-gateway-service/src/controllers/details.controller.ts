import { Request, Response } from 'express';
import { edit_service, deleteAddress_service, editAddress_service } from '@gateway/services/details';

// ! details Routes
// edit_service
// deleteAddress_service

async function edit(req: Request, res: Response): Promise<void> {
  const response = await edit_service({ data: req.body, id: req.params.id });
  res.status(response.data.status).json(response.data);
}

async function deleteAddress(req: Request, res: Response): Promise<void> {
  const response = await deleteAddress_service(req.params.id, req.params.addressId);
  res.status(response.data.status).json(response.data);
}

async function editAddress(req: Request, res: Response): Promise<void> {
  const response = await editAddress_service(req.params.id, req.params.addressId , req.body);
  res.status(response.data.status).json(response.data);
}

export { edit, deleteAddress, editAddress };
