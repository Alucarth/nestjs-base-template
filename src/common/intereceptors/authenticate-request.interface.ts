import { Request } from '@nestjs/common';

export interface AuthenticatedRequest extends Request {
  user?: { id: string }; // Customize this type according to your needs
}
