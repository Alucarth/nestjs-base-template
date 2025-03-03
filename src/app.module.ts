import { Module } from '@nestjs/common';

import { AppService } from './app.service';
import { DatabaseModule } from './database/database.module';
import { UserModule } from './modules/user/user.module';
import { AuthModule } from './modules/auth/auth.module';
import { ProcedureTypeModule } from './data/modules/procedure_type/procedure_type.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true, // Makes the ConfigService available globally
    }),
    DatabaseModule,
    UserModule,
    AuthModule,
    ProcedureTypeModule,
  ],
  providers: [AppService],
})
export class AppModule {}
