import express, { Express } from 'express';
import { start } from './server';
import { connectDB } from '@categories/db';
import { config } from '@categories/config';

const initialize = (): void => {
  connectDB(config.MONGO_URI!);
  const app: Express = express();
  start(app);
};

initialize();
