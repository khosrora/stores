import { get_otp } from '@gateway/controllers/auth.controller';
import express, { Request, Response, Router } from 'express';

const router: Router = express.Router();

export const authRoutes = (): Router => {
  router.post('/get_otp', get_otp);

  return router;
};
