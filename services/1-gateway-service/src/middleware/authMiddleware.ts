import { config } from '@gateway/config';
import { Request, Response, NextFunction } from 'express';
import * as jwt from 'jsonwebtoken';

const validateAccessToken = (accessToken: string): boolean => {
  const verifyToken = jwt.verify(accessToken, config.ACCESS_TOKEN_SECRET_KEY!);
  return !!verifyToken ? true : false;
};

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

  // Validate the access token
  if (!validateAccessToken(token)) {
    return res.status(401).json({ error: 'Invalid access token' });
  }

  // If the access token is valid, proceed to the next middleware or route handler
  next();
};

export default checkAccessToken;
