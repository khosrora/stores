import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import {
  getAllService,
  createProductService,
  isActive_or_not,
  addAttributesService,
  addSpecificationsService,
  deleteAttributesService,
  deleteSpecificationsService,
  addTypesService,
  deleteTypesService
} from '@products/services/products';

export async function getAll(_req: Request, res: Response) {
  const response = await getAllService();
  res.status(StatusCodes.OK).json(response);
}

export async function create(req: Request, res: Response) {
  const response = await createProductService(req.body);
  res.status(StatusCodes.OK).json(response);
}

export async function isActive(req: Request, res: Response) {
  const response = await isActive_or_not(req.params.id);
  res.status(StatusCodes.OK).json(response);
}

export async function addAttributes(req: Request, res: Response) {
  const response = await addAttributesService(req.params.id, req.body);
  res.status(StatusCodes.OK).json(response);
}

export async function addSpecifications(req: Request, res: Response) {
  const response = await addSpecificationsService(req.params.id, req.body);
  res.status(StatusCodes.OK).json(response);
}

export async function deleteAttributes(req: Request, res: Response) {
  const response = await deleteAttributesService(req.params.id, req.params.attrId);
  res.status(StatusCodes.OK).json(response);
}

export async function deleteSpecifications(req: Request, res: Response) {
  const response = await deleteSpecificationsService(req.params.id, req.params.specId);
  res.status(StatusCodes.OK).json(response);
}

export async function addTypes(req: Request, res: Response) {
  const response = await addTypesService(req.params.id, req.body);
  res.status(StatusCodes.OK).json(response);
}

export async function deleteTypes(req: Request, res: Response) {
  const response = await deleteTypesService(req.params.id, req.params.typesId);
  res.status(StatusCodes.OK).json(response);
}
