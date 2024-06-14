import { Request, Response } from 'express';
import { test_service, createOrder_service } from '@gateway/services/orders';

async function test(req: Request, res: Response): Promise<void> {
  const response = await test_service();
  res.status(response.data.status).json(response.data);
}

async function createOrder(req: Request, res: Response): Promise<void> {
  req.body.user = req.tokenPayload;
  const response = await createOrder_service(req.body);
  res.status(response.data.status).json(response.data);
}

export { test, createOrder };
