import { ConnectionOptions } from 'typeorm';

const entities = [__dirname + '/src/**/*.entity.ts'];
const migrations = ['./migrations/**/*.ts'];
// const cli = {
//   migrationsDir: './migrations',
// };

const connectionOptions: ConnectionOptions = {
  type: 'postgres',
  host: process.env.DB_HOST,
  port: +process.env.DB_PORT,
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  synchronize: false,
  logging: 'all',
  entities,
  migrations,
  // cli,
};

export default connectionOptions;
