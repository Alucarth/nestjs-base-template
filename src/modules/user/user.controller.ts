import { Controller, Get, Request, UseGuards } from '@nestjs/common';
import { UserService } from './user.service';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { AuthenticatedRequest } from 'src/common/intereceptors/authenticate-request.interface';

@Controller('user')
export class UserController {
  constructor(private userService: UserService) {}

  @UseGuards(JwtAuthGuard)
  @Get()
  async findAll(@Request() req: AuthenticatedRequest) {
    console.log('request user', req.user);
    return await this.userService.findAll();
  }
}
