import { Column, Entity } from 'typeorm';
import { BaseEntity } from 'src/common/model/base.entity';
@Entity('users')
export class User extends BaseEntity {
  @Column()
  username: string;

  @Column()
  identity_card: string;

  @Column()
  names: string;

  @Column({ nullable: true })
  father_last_name: string;

  @Column({ nullable: true })
  mother_last_name: string;

  @Column({ nullable: true })
  birth_date: Date;

  @Column({ nullable: true })
  email: string;

  @Column({ nullable: true })
  image_path: string;

  @Column({ default: false })
  has_access: boolean;
}
