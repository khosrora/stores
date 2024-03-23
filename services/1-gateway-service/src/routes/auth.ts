import { get_otp, check_otp, access_token } from '@gateway/controllers/auth.controller';
import express, { Router } from 'express';

const router: Router = express.Router();

export const authRoutes = (): Router => {
  router.post('/auth/get_otp', get_otp);
  router.post('/auth/check_otp', check_otp);
  router.post('/auth/access_token', access_token);

  return router;
};
