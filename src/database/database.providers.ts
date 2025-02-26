import { TypeOrmModuleAsyncOptions } from "@nestjs/typeorm";
import { ConfigModule } from "src/config/config.module";
import { ConfigService } from "src/config/config.service";

export const databaseProviders = {
    imports: [ConfigModule],
    inject: [ConfigService],
    useFactory: (configService: ConfigService) => {
      return {
        type: configService.get('DB_TYPE'),
        host: configService.get('DB_HOST'),
        port: configService.get('DB_PORT'),
        username: configService.get('DB_USERNAME'),
        password: configService.get('DB_PASSWORD'),
        database: configService.get('DB_DATABASE'),
        entities: [__dirname + './../**/**.entity{.ts,.js}'],
        synchronize: configService.get('DB_SYNC') === 'true',
      } as TypeOrmModuleAsyncOptions;
    },
  }