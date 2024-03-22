import express, { Router } from 'express';

// ! controllers
import { getOtp } from '@auth/controllers/getOtp.controller';

const router: Router = express.Router();

export const authRoutes = (): Router => {
  router.post('/get_otp', getOtp);

  return router;
};
