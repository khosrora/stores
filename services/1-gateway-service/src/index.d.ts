declare global {
  namespace Express {
    interface Request {
      tokenPayload?: IAuthPayload;
    }
  }
}

export interface IAuthPayload {
  id: string;
  iat: number | Date;
  exp: number | Date;
}
