import { Request, Response } from 'express';
import {
  get_all_products,
  create_products_products,
  isActive_orNot,
  addAttributesService,
  addSpecificationsService,
  deleteAttributesService,
  deleteSpecificationsService,
  addTypesService,
  deleteTypesService
} from '@gateway/services/products';

async function getAll(_req: Request, res: Response): Promise<void> {
  const response = await get_all_products();
  res.status(response.data.status).json(response.data);
}

async function create(req: Request, res: Response): Promise<void> {
  const response = await create_products_products(req.body);
  res.status(response.data.status).json(response.data);
}

async function isActive(req: Request, res: Response): Promise<void> {
  const response = await isActive_orNot(req.params.id);
  res.status(response.data.status).json(response.data);
}

async function addAttributes(req: Request, res: Response): Promise<void> {
  const response = await addAttributesService(req.params.id, req.body);
  res.status(response.data.status).json(response.data);
}

async function addSpecifications(req: Request, res: Response): Promise<void> {
  const response = await addSpecificationsService(req.params.id, req.body);
  res.status(response.data.status).json(response.data);
}

async function deleteAttributes(req: Request, res: Response): Promise<void> {
  const response = await deleteAttributesService(req.params.id, req.params.attrId);
  res.status(response.data.status).json(response.data);
}

async function deleteSpecifications(req: Request, res: Response): Promise<void> {
  const response = await deleteSpecificationsService(req.params.id, req.params.specId);
  res.status(response.data.status).json(response.data);
}

async function addTypes(req: Request, res: Response): Promise<void> {
  const response = await addTypesService(req.params.id, req.body);
  res.status(response.data.status).json(response.data);
}

async function deleteTypes(req: Request, res: Response): Promise<void> {
  const response = await deleteTypesService(req.params.id, req.params.typesId);
  res.status(response.data.status).json(response.data);
}

export { getAll, create, isActive, addAttributes, addSpecifications, deleteAttributes, deleteSpecifications, addTypes, deleteTypes };
