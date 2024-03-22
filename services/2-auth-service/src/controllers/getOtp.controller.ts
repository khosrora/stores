import { Request, Response } from 'express';
import { getOtpService } from '@auth/services/userAuthService';
import { StatusCodes } from 'http-status-codes';

export async function getOtp(req: Request, res: Response) {
  const response = await getOtpService(req.body);
  res.status(StatusCodes.OK).json(response);
}
