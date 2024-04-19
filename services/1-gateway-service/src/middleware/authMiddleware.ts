import { config } from '@gateway/config';
import { Request, Response, NextFunction } from 'express';
import * as jwt from 'jsonwebtoken';
import { IAuthPayload } from '..';

// Middleware function to check access token
const checkAccessToken = (req: Request, res: Response, next: NextFunction) => {
  const accessToken: string | undefined = req.headers['authorization'];

  if (!accessToken) {
    return res.status(401).json({ error: 'Access token is missing' });
  }

  // Splitting 'Bearer token' to get just the token
  const token = accessToken.split(' ')[1];

  if (!token) {
    return res.status(401).json({ error: 'Access token is missing' });
  }

  const verifyToken: IAuthPayload = jwt.verify(token, config.ACCESS_TOKEN_SECRET_KEY!) as IAuthPayload;

  req.tokenPayload = verifyToken;

  next();
};

export default checkAccessToken;
