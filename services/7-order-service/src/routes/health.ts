import express, { Request, Response, Router } from 'express';

const router: Router = express.Router();

export const healthRoutes = (): Router => {
  router.get('/health_orders', (_req: Request, res: Response) => {
    return res.json({ status: 200, message: 'order service is running' });
  });

  return router;
};
