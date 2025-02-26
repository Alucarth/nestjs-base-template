export class CreateUserDto {
  username: string;
  identity_card: string;
  names: string;
  father_last_name: string;
  mother_last_name: string;
  birth_date: Date;
  image_path: string;
  has_access: boolean;
}
