import { Request, Response } from 'express';
import { test_service } from '@gateway/services/orders';

async function test(req: Request, res: Response): Promise<void> {
  const response = await test_service();
  res.status(response.data.status).json(response.data);
}

export { test };
