import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { databaseProviders } from './database.providers';
import { ConfigModule } from 'src/config/config.module';
import { SeederModule } from './seeder/seeder.module';

@Module({
  imports: [
    TypeOrmModule.forRootAsync({ ...databaseProviders }),
    ConfigModule,
    SeederModule,
  ],
})
export class DatabaseModule {}
