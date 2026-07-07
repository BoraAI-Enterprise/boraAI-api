import { 
  Entity, 
  PrimaryGeneratedColumn, 
  Column, 
  CreateDateColumn 
} from 'typeorm';

export enum Plano {
  GRATUITO = 'GRATUITO',
  PREMIUM = 'PREMIUM'
}

export enum Objetivo {
  EMAGRECIMENTO = 'EMAGRECIMENTO',
  HIPERTROFIA = 'HIPERTROFIA',
  MANUTENCAO = 'MANUTENCAO'
}

export enum NivelAtividade {
  SEDENTARIO = 'SEDENTARIO',
  MODERADO = 'MODERADO',
  ATIVO = 'ATIVO'
}

@Entity({ name: 'usuarios' }) 
export class Usuario {
  @PrimaryGeneratedColumn('uuid') 
  id!: string;

  @Column()
  nome!: string;

  @Column({ unique: true })
  email!: string;

  @Column()
  senha?: string;

  @Column({ name: 'data_nascimento', type: 'date' }) 
  dataDeNascimento!: Date;

  @Column()
  endereco!: string;

  @Column({ type: 'decimal', precision: 5, scale: 2 }) 
  peso!: number;

  @Column({ type: 'decimal', precision: 5, scale: 2 }) 
  altura!: number;

  @Column({
    type: 'enum',
    enum: Objetivo,
  })
  objetivo!: Objetivo;

  @Column({
    type: 'enum',
    enum: NivelAtividade,
    name: 'nivel_atividade'
  })
  nivelAtividade!: NivelAtividade;

  @Column({
    type: 'enum',
    enum: Plano,
    default: Plano.GRATUITO
  })
  plano!: Plano;

  @Column({ default: 0 })
  streak!: number;

  @CreateDateColumn({ name: 'criado_em' })
  criadoEm!: Date; 
}