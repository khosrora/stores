import { Sequelize } from 'sequelize-typescript';
import { config } from './config';

const sequelize = new Sequelize({
  database: config.DATABASE_NAME,
  username: config.DATABASE_USERNAME,
  password: config.DATABASE_PASSWORD,
  host: config.DATABASE_HOST,
  port: 5432, // Or your PostgreSQL port
  dialect: 'postgres',
  models: [__dirname + '/models'] // Directory where your model files are located
});

export async function connectToDb() {
  try {
    await sequelize.authenticate();
    console.log('Connection to PG has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
}
export default sequelize;
