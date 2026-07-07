import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { UsuariosService } from './usuarios.service';
import { LoginDto } from './dto/loginDto';
import { UpdateUsuarioDto } from './dto/update-usuario.dto';
import { Usuario } from './entities/usuario.entity';

@Controller('usuarios')
export class UsuariosController {
  constructor(private readonly usuariosService: UsuariosService) {}

  @Post('cadastrar')
  cadastrar(@Body() usuario: Usuario) {
    return this.usuariosService.cadastrar(usuario);
  }

  @Post('login')
  login(@Body() login: LoginDto){
    return this.usuariosService.login(login);
  }

  @Get()
  findAll() {
    return this.usuariosService.findAll();
  }

  @Get(':email')
  findOne(@Param('email') email: string) {
    return this.usuariosService.findOne(email);
  }

}
