import { TypeOrmModuleOptions } from '@nestjs/typeorm';

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
