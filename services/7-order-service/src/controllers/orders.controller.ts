import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';

export async function getAll(req: Request, res: Response) {
  // const response = await getAllService();
  res.status(StatusCodes.OK).json({});
}
