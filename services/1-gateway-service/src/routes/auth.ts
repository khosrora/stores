import { get_otp } from '@gateway/controllers/auth.controller';
import express, { Router } from 'express';

const router: Router = express.Router();

export const authRoutes = (): Router => {
  router.post('/auth/get_otp', get_otp);

  return router;
};
