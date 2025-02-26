import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { databaseProviders } from "./database.providers";
import { ConfigModule } from "src/config/config.module";

@Module({
    imports: [ TypeOrmModule.forRootAsync( { ...databaseProviders }), ConfigModule]
})
export class DatabaseModule {}