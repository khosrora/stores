import { Request, Response } from 'express';
import {
  create_category_parent,
  create_category_subCategory,
  get_all_categories_service,
  get_category_service,
  edit_category_service,
  delete_category_service
} from '@gateway/services/categories';

async function create(req: Request, res: Response): Promise<void> {
  const response = await create_category_parent(req.body);
  res.status(response.data.status).json(response.data);
}

async function create_subCategory(req: Request, res: Response): Promise<void> {
  const response = await create_category_subCategory(req.body, req.params.id);
  res.status(response.data.status).json(response.data);
}

async function get_all_categories(_req: Request, res: Response): Promise<void> {
  const response = await get_all_categories_service();
  res.status(response.data.status).json(response.data);
}

async function get_category(req: Request, res: Response): Promise<void> {
  const response = await get_category_service(req.params.id);
  res.status(response.data.status).json(response.data);
}

async function edit_category(req: Request, res: Response): Promise<void> {
  const response = await edit_category_service(req.params.id, req.body);
  res.status(response.data.status).json(response.data);
}

async function delete_category(req: Request, res: Response): Promise<void> {
  const response = await delete_category_service(req.params.id);
  res.status(response.data.status).json(response.data);
}

export { create, create_subCategory, get_all_categories, get_category, edit_category, delete_category };
