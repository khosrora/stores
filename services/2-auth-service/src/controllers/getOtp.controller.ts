import { Request, Response } from 'express';
import statusCode from 'http-status-codes';
import { getOtpService } from '@auth/services/getOtpService';

export async function getOtp(req: Request, res: Response) {
  const response = await getOtpService(req.body);
  res.status(statusCode.OK).json(response.message);
}
