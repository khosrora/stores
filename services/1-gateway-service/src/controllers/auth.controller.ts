import statusCode from 'http-status-codes';
import { Request, Response } from 'express';
import { get_otp_service } from '@gateway/services/auth';

// ! login routes
// * get Otp
// * check Otp
// * get accessToken

async function get_otp(req: Request, res: Response): Promise<void> {
  const { phoneNumber } = req.body;
  const response = await get_otp_service(phoneNumber);
  res.status(statusCode.OK).json({ message: response.data.message });
}

export { get_otp };
