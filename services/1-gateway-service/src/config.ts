import dotenv from 'dotenv';
dotenv.config({});

export class Config {
  public PORT: string | undefined;
  public BASE_PATH: string | undefined;

  constructor() {
    this.PORT = process.env.PORT || '';
    this.BASE_PATH = process.env.BASE_PATH_GATEWAY || '';
  }
}

export const config: Config = new Config();
