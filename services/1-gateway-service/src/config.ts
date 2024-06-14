import dotenv from 'dotenv';
dotenv.config({});

export class Config {
  public PORT: string | undefined;
  public BASE_PATH: string | undefined;
  public BASE_PATH_AUTH: string | undefined;
  public BASE_PATH_DETAILS: string | undefined;
  public BASE_PATH_CATEGORIES: string | undefined;
  public BASE_PATH_BRAND: string | undefined;
  public BASE_PATH_PRODUCTS: string | undefined;
  public BASE_PATH_BLOG: string | undefined;
  public BASE_PATH_ORDERS: string | undefined;
  public ACCESS_TOKEN_SECRET_KEY: string | undefined;

  constructor() {
    this.PORT = process.env.PORT || '';
    this.BASE_PATH = process.env.BASE_PATH_GATEWAY || '';
    this.BASE_PATH_AUTH = process.env.BASE_PATH_AUTH || '';
    this.BASE_PATH_DETAILS = process.env.BASE_PATH_DETAILS || '';
    this.BASE_PATH_CATEGORIES = process.env.BASE_PATH_CATEGORIES || '';
    this.BASE_PATH_BRAND = process.env.BASE_PATH_BRAND || '';
    this.BASE_PATH_PRODUCTS = process.env.BASE_PATH_PRODUCTS || '';
    this.BASE_PATH_ORDERS = process.env.BASE_PATH_ORDERS || '';
    this.BASE_PATH_BLOG = process.env.BASE_PATH_BLOG || '';
    this.ACCESS_TOKEN_SECRET_KEY = process.env.ACCESS_TOKEN_SECRET_KEY || '';
  }
}

export const config: Config = new Config();
