import { Module } from '@nestjs/common';
import { SeederController } from './seeder.controller';
import { SeederService } from './seeder.service';
import { AuthService } from 'src/modules/auth/auth.service';

@Module({
  controllers: [SeederController],
  providers: [SeederService, AuthService],
})
export class SeederModule {}
