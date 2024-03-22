import express, { Express } from 'express';
import { start } from './server';
import { connectDB } from '@auth/db';
import { config } from '@auth/config';

const initialize = (): void => {
  connectDB(config.MONGO_URI!);
  const app: Express = express();
  start(app);
};

initialize();