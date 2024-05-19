import express, { Express } from 'express';
import { start } from './server';
import { connectDB } from '@products/db';
import { config } from '@products/config';

const initialize = (): void => {
  connectDB(config.MONGO_URI!);
  const app: Express = express();
  start(app);
};

initialize();
