import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { ConnectionOptions } from 'typeorm';

// export const typeORMConfig: TypeOrmModuleOptions = {
//   type: 'postgres',
//   host: 'localhost',
//   port: 5432,
//   username: 'postgres',
//   password: 'daniel93',
//   database: 'Boards',
//   entities: [__dirname + '/../**/*.entity.{js,ts}'],
//   synchronize: true,
// };
export const typeORMConfig: TypeOrmModuleOptions = {
  type: 'mysql',
  host: 'localhost',
  port: 3306,
  username: 'root',
  password: 'daniel93',
  database: 'test',
  entities: [__dirname + '/../**/*.entity.{js,ts}'],
  synchronize: true,
};

const connectionOptions: ConnectionOptions = {
  type: 'postgres',
  database: 'board',
  synchronize: true,
  logging: true,
  entities: ['entities/*.*'],
  host: process.env.DB_ENDPOINT || 'localhost',
  port: 5432,
  username: process.env.DB_USERNAME || '',
  password: process.env.DB_PASSWORD || '',
};

export default connectionOptions;
