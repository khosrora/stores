import express, { Express } from 'express';
import { start } from './server';
import { connectDB } from '@grouping/db';
import { config } from '@grouping/config';

const initialize = (): void => {
  connectDB(config.MONGO_URI!);
  const app: Express = express();
  start(app);
};

initialize();
