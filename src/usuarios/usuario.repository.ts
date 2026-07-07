import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Usuario } from "./entities/usuario.entity";
import { Repository } from "typeorm";


@Injectable()
export class UsuarioRepository{
    constructor(
        @InjectRepository(Usuario)
        private readonly typeOrmRepository: Repository<Usuario>
    ){}

    async criarUsuario(usuario: Partial<Usuario>): Promise<Usuario> {
        const novoUsuario = this.typeOrmRepository.create(usuario);
        return await this.typeOrmRepository.save(novoUsuario);
    }

    async buscarPorEmail(email: string): Promise<Usuario | null> {
        return await this.typeOrmRepository.findOne( {where: {email}});
    }

    async buscarTodos(): Promise<Usuario[]> {
        return this.typeOrmRepository.find();
    }
}