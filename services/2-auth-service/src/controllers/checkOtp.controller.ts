import { Request, Response } from 'express';
import { checkOtpService } from '@auth/services/userAuthService';
import { StatusCodes } from 'http-status-codes';

export async function checkOtp(req: Request, res: Response) {
  const response = await checkOtpService(req.body);
  res.status(StatusCodes.OK).json(response);
}
