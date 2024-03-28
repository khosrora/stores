import dotenv from 'dotenv';
dotenv.config({});

export class Config {
  public PORT: string | undefined;
  public BASE_PATH_CATEGORY: string | undefined;
  public BASE_PATH_BRANDS: string | undefined;
  public MONGO_URI: string | undefined;
  public ELASTIC_SEARCH: string | undefined;

  constructor() {
    this.PORT = process.env.PORT || '';
    this.BASE_PATH_CATEGORY = process.env.BASE_PATH_CATEGORIES || '';
    this.BASE_PATH_BRANDS = process.env.BASE_PATH_BRANDS || '';
    this.MONGO_URI = process.env.MONGO_URI || '';
    this.ELASTIC_SEARCH = process.env.ELASTIC_SEARCH_URI || '';
  }
}

export const config: Config = new Config();
