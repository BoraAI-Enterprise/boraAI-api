import { PartialType } from '@nestjs/mapped-types';
import { LoginDto } from './loginDto';

export class UpdateUsuarioDto extends PartialType(LoginDto) {}
