import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import { editDetailsService, deleteAddressDetailsService, editAddressDetailsService } from '@details/services/details';

export async function editDetails(req: Request, res: Response) {
  const response = await editDetailsService(req.body, req.params.id);
  res.status(StatusCodes.OK).json(response);
}

export async function deleteAddressDetails(req: Request, res: Response) {
  const response = await deleteAddressDetailsService(req.params.id, req.params.addressId);
  res.status(StatusCodes.OK).json(response);
}

export async function editAddressDetails(req: Request, res: Response) {
  const response = await editAddressDetailsService(req.params.id, req.params.addressId, req.body);
  res.status(StatusCodes.OK).json(response);
}
