import { config } from '@gateway/config';
import axios from 'axios';
import statusCode from 'http-status-codes';
import { Request, Response } from 'express';
import { get_otp_service } from '@gateway/services/auth';

const instance = axios.create({
  baseURL: config.BASE_PATH,
  headers: { 'micro-service': 'auth' }
});

// ! login routes
// * get Otp
// * check Otp
// * get accessToken

async function get_otp(req: Request, res: Response): Promise<any> {
  const response = await get_otp_service();
  res.status(statusCode.OK).json({ message: response.message });
}

export { get_otp };
