import { get_otp, check_otp } from '@gateway/controllers/auth.controller';
import express, { Router } from 'express';

const router: Router = express.Router();

export const authRoutes = (): Router => {
  router.post('/auth/get_otp', get_otp);
  router.post('/auth/check_otp', check_otp);

  return router;
};
