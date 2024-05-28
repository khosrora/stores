import express, { Express } from 'express';
import { start } from './server';
import { config } from '@order/config';
import { connectToDb } from '@order/db';

const initialize = async (): Promise<void> => {
  connectToDb();
  const app: Express = express();
  start(app);
};

initialize();
