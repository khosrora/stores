import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import { createBrandService, editBrandService, addBranchService, deleteBranchService, editBranchService } from '@grouping/services/brands';

export async function createBrand(req: Request, res: Response) {
  const response = await createBrandService(req.body);
  res.status(StatusCodes.OK).json(response);
}

export async function editBrand(req: Request, res: Response) {
  const response = await editBrandService(req.params.id, req.body);
  res.status(StatusCodes.OK).json(response);
}

export async function addBranch(req: Request, res: Response) {
  const response = await addBranchService(req.params.id, req.body);
  res.status(StatusCodes.OK).json(response);
}

export async function deleteBranch(req: Request, res: Response) {
  const response = await deleteBranchService(req.params.id, req.params.branchId);
  res.status(StatusCodes.OK).json(response);
}

export async function editBranch(req: Request, res: Response) {
  const response = await editBranchService(req.params.id, req.params.branchId, req.body);
  res.status(StatusCodes.OK).json(response);
}
