import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { typeOrmComfig } from './config/typeorm.comfig';
import { TaskModule } from './task/task.module';
@Module({
  imports: [TypeOrmModule.forRoot(typeOrmComfig), TaskModule],
})
export class AppModule {}
