import express, { Express } from 'express';
import { start } from './server';
import { connectDB } from '@details/db';
import { config } from '@details/config';

const initialize = (): void => {
  connectDB(config.MONGO_URI!);
  const app: Express = express();
  start(app);
};

initialize();