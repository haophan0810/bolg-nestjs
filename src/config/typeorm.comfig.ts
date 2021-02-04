import { TypeOrmModuleOptions } from "@nestjs/typeorm";

export const typeOrmComfig: TypeOrmModuleOptions = {
  type: 'postgres',
  host: 'localhost',
  username: 'postgres',
  password: 'postgres',
  database: 'blog',
  entities: [__dirname + '/../**/*.entity{.ts,.js}'],
  synchronize: true,
}