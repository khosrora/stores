import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import { createBrandService } from '@grouping/services/brands';

export async function createBrand(req: Request, res: Response) {
  const response = await createBrandService();
  res.status(StatusCodes.OK).json(response);
}
