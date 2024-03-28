import { Request, Response } from 'express';
import { create_brand_service } from '@gateway/services/brands';

async function create_brand(req: Request, res: Response): Promise<void> {
  const response = await create_brand_service();
  res.status(response.data.status).json(response.data);
}

export { create_brand };
