import { Request, Response } from 'express';
import { accessTokenService } from '@auth/services/userAuthService';
import { StatusCodes } from 'http-status-codes';

export async function accessToken(req: Request, res: Response) {
  const { refreshToken } = req.body;
  const response = await accessTokenService(refreshToken);
  res.status(StatusCodes.OK).json(response);
}
