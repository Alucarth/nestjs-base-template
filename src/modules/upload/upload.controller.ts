/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import {
  Controller,
  Post,
  Req,
  UploadedFile,
  UseGuards,
  UseInterceptors,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { existsSync, mkdirSync } from 'fs';
import { extname } from 'path';
import { AuthenticatedRequest } from 'src/common/intereceptors/authenticate-request.interface';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';

@UseGuards(JwtAuthGuard)
@Controller('upload')
export class UploadController {
  @Post()
  @UseInterceptors(
    FileInterceptor('file', {
      storage: diskStorage({
        destination: (req, file, cb) => {
          console.log(req.user);
          const user_id = 1;
          const uploadPath = `uploads/${user_id}`;

          if (!existsSync(uploadPath)) {
            mkdirSync(uploadPath, { recursive: true });
          }

          cb(null, uploadPath);
        },
        filename: (req, file, cb) => {
          const uniqueSuffix =
            Date.now() + '-' + Math.round(Math.random() * 1e9);
          cb(
            null,
            file.fieldname + '-' + uniqueSuffix + extname(file.originalname),
          );
        },
      }),
    }),
  )
  uploadFile(
    @UploadedFile() file: Express.Multer.File,
    @Req() req: AuthenticatedRequest,
  ) {
    const user_id = req.user?.id;
    return { filename: file.filename, path: file.path, user_id };
  }
}
