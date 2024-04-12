import express, { Request, Response, Router } from 'express';

const router: Router = express.Router();

export const healthRoutes = (): Router => {
  router.get('/health_products', (_req: Request, res: Response) => {
    return res.json({ message: 'products service is running' });
  });

  return router;
};
