import mongoose from 'mongoose';
import { Logger } from 'winston';

import winstonLogger from '@grouping/utils/logger';

const logger: Logger = winstonLogger('debug');

const connectDB = (url: string) => {
  try {
    logger.info('mongodb try to connect ... in method connectDB()');
    mongoose.connect(url);
    logger.info('mongodb is connected ... in method connectDB()');
  } catch (error) {
    logger.error('mongodb connect failed ... in method connectDB()', error);
  }
};

export { connectDB };
