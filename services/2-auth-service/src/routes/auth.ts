import express, { Router } from 'express';

// ! controllers
import { getOtp } from '@auth/controllers/getOtp.controller';
import { checkOtp } from '@auth/controllers/checkOtp.controller';
import { accessToken } from '@auth/controllers/accessToken.controller';

const router: Router = express.Router();

export const authRoutes = (): Router => {
  router.post('/get_otp', getOtp);
  router.post('/check_otp', checkOtp);
  router.post('/access_token', accessToken);

  return router;
};
