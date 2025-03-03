import { TimestampedEntity } from 'src/common/timestamp.entity';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('users')
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  username: string;

  @Column()
  password: string;

  @Column({ unique: true })
  identity_card: string;

  @Column()
  names: string;

  @Column({ nullable: true })
  father_last_name: string;

  @Column({ nullable: true })
  mother_last_name: string;

  @Column({ nullable: true })
  birth_date: Date;

  @Column({ unique: true, nullable: true })
  email: string;

  @Column({ nullable: true })
  image_path: string;

  @Column({ default: false })
  has_access: boolean;

  @Column({ type: 'varchar', length: 300 })
  created_by: string;

  @Column({ type: 'varchar', length: 300 })
  last_changed_by: string;

  @Column(() => TimestampedEntity, { prefix: false })
  timestamp: TimestampedEntity;
}
