import dotenv from 'dotenv';
dotenv.config({});

export class Config {
  public PORT: string | undefined;
  public BASE_PATH: string | undefined;
  public MONGO_URI: string | undefined;

  constructor() {
    this.PORT = process.env.PORT || '';
    this.BASE_PATH = process.env.BASE_PATH_CATEGORIES || '';
    this.MONGO_URI = process.env.MONGO_URI || '';
  }
}

export const config: Config = new Config();