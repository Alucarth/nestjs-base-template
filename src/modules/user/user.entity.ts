import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity('users')
export class User {
  @PrimaryGeneratedColumn()
  id: number;

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

  @CreateDateColumn()
  created_at: Date; // Creation date

  @UpdateDateColumn()
  updated_at: Date; // Last updated date

  @DeleteDateColumn()
  deleted_at: Date; // Deletion date
}
