import { Module } from '@nestjs/common';
import { UsuariosService } from './usuarios.service';
import { UsuariosController } from './usuarios.controller';
import { Usuario } from './entities/usuario.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsuarioRepository } from './usuario.repository';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports: [
    TypeOrmModule.forFeature([Usuario]),
    JwtModule.register({
      global: true, 
      secret: 'SUA_CHAVE_SECRETA_SUPER_PROTEGIDA',
      signOptions: { expiresIn: '1d' },
    }), 
  ],
  controllers: [UsuariosController],
  providers: [UsuariosService, UsuarioRepository],
})
export class UsuariosModule {}
