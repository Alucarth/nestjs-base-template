import { Module } from '@nestjs/common';

import { AppService } from './app.service';
import { DatabaseModule } from './database/database.module';
import { UserModule } from './modules/user/user.module';
import { AuthModule } from './modules/auth/auth.module';
import { ConfigModule } from '@nestjs/config';
import { UploadModule } from './modules/upload/upload.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true, // Makes the ConfigService available globally
    }),
    DatabaseModule,
    UserModule,
    AuthModule,
    UploadModule,
  ],
  providers: [AppService],
})
export class AppModule {}
