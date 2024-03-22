import statusCodes from 'http-status-codes';
import { Request, Response } from 'express';
import { get_otp_service, check_otp_service } from '@gateway/services/auth';

// ! login routes
// * get Otp
// * check Otp
// * get accessToken

async function get_otp(req: Request, res: Response): Promise<void> {
  const { phoneNumber } = req.body;
  const response = await get_otp_service(phoneNumber);
  res.status(response.data.status).json(response.data);
}

async function check_otp(req: Request, res: Response): Promise<void> {
  const { phoneNumber, code } = req.body;
  const response = await check_otp_service(phoneNumber, code);
  res.status(response.data.status).json(response.data);
}

export { get_otp, check_otp };
