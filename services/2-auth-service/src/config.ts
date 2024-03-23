import dotenv from 'dotenv';
dotenv.config({});

export class Config {
  public PORT: string | undefined;
  public BASE_PATH: string | undefined;
  public MONGO_URI: string | undefined;
  public REFRESH_SECRET: string | undefined;
  public ACCESS_SECRET: string | undefined;
  public RABBITMQ_URL: string | undefined;

  constructor() {
    this.PORT = process.env.PORT || '';
    this.BASE_PATH = process.env.BASE_PATH_AUTH || '';
    this.MONGO_URI = process.env.MONGO_URI || '';
    this.REFRESH_SECRET = process.env.REFRESH_TOKEN_SECRET_KEY || '';
    this.ACCESS_SECRET = process.env.ACCESS_TOKEN_SECRET_KEY || '';
    this.RABBITMQ_URL = process.env.RABBITMQ_URL || '';
  }
}

export const config: Config = new Config();
