import { Module } from '@nestjs/common';
import { UserModule } from '../user/user.module';
import { PassportModule } from '@nestjs/passport';
import { JwtConfigModule } from './jwt.module';
import { AuthService } from './auth.service';
import { JwtStrategy } from './jwt.strategy';
import { AuthController } from './auth.controller';
import { LocalStrategy } from './local.stategy';

@Module({
  imports: [UserModule, PassportModule, JwtConfigModule, UserModule],
  providers: [AuthService, JwtStrategy, LocalStrategy],
  controllers: [AuthController],
  exports: [AuthService],
})
export class AuthModule {}
