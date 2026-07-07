import { ConflictException, Injectable, UnauthorizedException } from '@nestjs/common';
import { LoginDto } from './dto/loginDto';
import { UpdateUsuarioDto } from './dto/update-usuario.dto';
import { UsuarioRepository } from './usuario.repository';
import { Usuario } from './entities/usuario.entity';
import { randomUUID } from 'crypto';
import { DateUtils } from 'typeorm/util/DateUtils.js';

@Injectable()
export class UsuariosService {

  constructor(private readonly usuarioRepository: UsuarioRepository){}

  async cadastrar(usuario: Usuario) {

    const usuarioExistente = await this.usuarioRepository.buscarPorEmail(usuario.email);
    if (usuarioExistente) {
      throw new ConflictException('Este e-mail já está cadastrado');
    }

    this.usuarioRepository.criarUsuario(usuario);

    return {mensagem: 'Usuario criado',
      usuario: {
        nome: usuario.nome
      }
    };
  }

  async login(loginDto: LoginDto){

    const usuarioExistente = await this.usuarioRepository.buscarPorEmail(loginDto.email)

    if(!usuarioExistente){
      throw new UnauthorizedException('Credenciais inválidas');
    }

    const senhaValida = usuarioExistente.senha === loginDto.senha

    if(!usuarioExistente){
      throw new UnauthorizedException('Credenciais inválidas');
    }

    return {
      mensagem: 'Login realizado com sucesso',
      usuario: {
        id: usuarioExistente.id,
        nome: usuarioExistente.nome,
        email: usuarioExistente.email,
      },
    };

  }

  async findAll() {
    return this.usuarioRepository.buscarTodos();
  }

  async findOne(email: string) {
    const usuarioExistente = this.usuarioRepository.buscarPorEmail(email);
    
    return usuarioExistente;
  }
}
