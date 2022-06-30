import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn } from "typeorm";

@Entity("employees")
export class Employees {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column("varchar")
  cpf: string;

  @Column("varchar")
  name: string;

  @Column("varchar")
  email: string;

  @Column("varchar")
  avatar: string;

  @Column("varchar")
  biografia: string;

  @Column("varchar")
  senha: string;

  @CreateDateColumn()
  created_at: Date;

  @CreateDateColumn()
  updated_at: Date;
}
