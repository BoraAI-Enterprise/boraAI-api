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
      global: true, // Torna o JwtService disponível em toda a aplicação
      secret: 'SUA_CHAVE_SECRETA_SUPER_PROTEGIDA', // Em produção, use variáveis de ambiente!
      signOptions: { expiresIn: '1d' }, // O token vai expirar em 1 dia
    }), 
  ],
  controllers: [UsuariosController],
  providers: [UsuariosService, UsuarioRepository],
})
export class UsuariosModule {}
