import express, { Router } from 'express';

// ! controllers
import { getOtp } from '@auth/controllers/getOtp.controller';
import { checkOtp } from '@auth/controllers/checkOtp.controller';

const router: Router = express.Router();

export const authRoutes = (): Router => {
  router.post('/get_otp', getOtp);
  router.post('/check_otp', checkOtp);

  return router;
};
