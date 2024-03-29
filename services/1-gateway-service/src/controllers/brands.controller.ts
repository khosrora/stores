import { Request, Response } from 'express';
import {
  create_brand_service,
  edit_brand_service,
  add_branch_service,
  delete_branch_service,
  edit_branch_service
} from '@gateway/services/brands';

async function create_brand(req: Request, res: Response): Promise<void> {
  const response = await create_brand_service(req.body);
  res.status(response.data.status).json(response.data);
}

async function edit_brand(req: Request, res: Response): Promise<void> {
  const response = await edit_brand_service(req.params.id, req.body);
  res.status(response.data.status).json(response.data);
}

async function add_branch(req: Request, res: Response): Promise<void> {
  const response = await add_branch_service(req.params.id, req.body);
  res.status(response.data.status).json(response.data);
}

async function delete_branch(req: Request, res: Response): Promise<void> {
  const response = await delete_branch_service(req.params.id, req.params.idBranch);
  res.status(response.data.status).json(response.data);
}

async function edit_branch(req: Request, res: Response): Promise<void> {
  const response = await edit_branch_service(req.params.id, req.params.idBranch, req.body);
  res.status(response.data.status).json(response.data);
}

export { create_brand, edit_brand, add_branch, delete_branch, edit_branch };
