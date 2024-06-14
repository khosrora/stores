import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import { create_order_service } from '@order/services/products';

export async function createOrder(req: Request, res: Response) {
  const { id } = req.body.user;
  const response = await create_order_service(req.body , id);
  res.status(StatusCodes.OK).json(response);
}
