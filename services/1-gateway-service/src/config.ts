import dotenv from 'dotenv';
dotenv.config({});

export class Config {
  public PORT: string | undefined;

  constructor() {
    this.PORT = process.env.PORT || '';
  }
}

export const config: Config = new Config();
