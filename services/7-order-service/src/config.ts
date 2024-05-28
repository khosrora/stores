import dotenv from 'dotenv';
dotenv.config({});

export class Config {
  public PORT: string | undefined;
  public BASE_PATH_PRODUCT: string | undefined;
  public MONGO_URI: string | undefined;
  public ELASTIC_SEARCH_URL: string | undefined;
  public INDEX_ELASTIC_SEARCH: string | undefined;

  public DATABASE_NAME: string | undefined;
  public DATABASE_USERNAME: string | undefined;
  public DATABASE_PASSWORD: string | undefined;
  public DATABASE_HOST: string | undefined;

  constructor() {
    this.PORT = process.env.PORT || '';
    this.BASE_PATH_PRODUCT = process.env.BASE_PATH_PRODUCT || '';
    this.MONGO_URI = process.env.MONGO_URI || '';
    this.ELASTIC_SEARCH_URL = process.env.ELASTIC_SEARCH_URL || '';
    this.INDEX_ELASTIC_SEARCH = process.env.INDEX_ELASTIC_SEARCH || '';

    this.DATABASE_NAME = process.env.DATABASE_NAME || '';
    this.DATABASE_USERNAME = process.env.DATABASE_USERNAME || '';
    this.DATABASE_PASSWORD = process.env.DATABASE_PASSWORD || '';
    this.DATABASE_HOST = process.env.DATABASE_HOST || '';
  }
}

export const config: Config = new Config();
