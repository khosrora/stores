import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import {
  createCategoryService,
  createSubCategoryService,
  getAllService,
  getService,
  deleteCategoryService,
  editCategoryService
} from '@grouping/services/categories';


export async function createCategory(req: Request, res: Response) {
  const response = await createCategoryService(req.body);
  res.status(StatusCodes.OK).json(response);
}

export async function createSubCategory(req: Request, res: Response) {
  const response = await createSubCategoryService(req.body, req.params.id);
  res.status(StatusCodes.OK).json(response);
}

export async function getAll(req: Request, res: Response) {
  const response = await getAllService();
  res.status(StatusCodes.OK).json(response);
}
export async function get(req: Request, res: Response) {
  const response = await getService(req.params.id);
  res.status(StatusCodes.OK).json(response);
}
export async function deleteCategory(req: Request, res: Response) {
  const response = await deleteCategoryService(req.params.id);
  res.status(StatusCodes.OK).json(response);
}
export async function editCategory(req: Request, res: Response) {
  const response = await editCategoryService(req.params.id, req.body);
  res.status(StatusCodes.OK).json(response);
}
