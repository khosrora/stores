import express, { Request, Response, Router } from 'express';

const router: Router = express.Router();

export const healthRoutes = (): Router => {
  router.get('/health', (_req: Request, res: Response) => {
    return res.json({ message: 'gateway service is runnig' });
  });

  return router;
};
