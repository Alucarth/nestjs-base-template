import { Injectable } from '@nestjs/common';
import { AuthService } from 'src/modules/auth/auth.service';
import { User } from 'src/modules/user/user.entity';
import { DataSource } from 'typeorm';

@Injectable()
export class SeederService {
  constructor(
    private readonly dataSource: DataSource,
    private readonly authService: AuthService,
  ) {}

  async seed() {
    // Seed your database here
    const queryRunner = this.dataSource.createQueryRunner();
    await queryRunner.connect();
    await queryRunner.startTransaction();
    try {
      const userRepository = queryRunner.manager.getRepository(User);
      const users = await userRepository.find();
      if (users.length === 0) {
        const user = new User();
        user.username = '6047054';
        user.password = await this.authService.hashPassword('admin');
        user.identity_card = '6047054';
        user.names = 'Leandro David';
        user.father_last_name = 'Torrez';
        user.mother_last_name = 'Salinas';
        user.birth_date = new Date();
        user.image_path = 'admin.jpg';
        user.has_access = true;
        user.created_by = 'SeederService';
        user.last_changed_by = 'SeederService';
        await userRepository.save(user);
      } else {
        console.log('Users already seeded');
      }

      await queryRunner.commitTransaction();
    } catch (error) {
      await queryRunner.rollbackTransaction();
      throw error;
    } finally {
      await queryRunner.release();
    }
  }
}
