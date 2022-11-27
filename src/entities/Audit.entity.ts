import "reflect-metadata";
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  JoinColumn,
  CreateDateColumn,
  UpdateDateColumn,
  Index,
  ManyToOne,
} from "typeorm";
import { Auditor } from "./Auditor.entity";

@Entity()
export class Audit {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Auditor, (auditor) => auditor.id, { eager: true })
  @JoinColumn()
  auditor: Auditor;

  @Column("int", { name: "auditorId" })
  @Index()
  auditorId: Auditor["id"];

  @Column()
  name: string;

  @CreateDateColumn()
  createdAt: Date;
  @UpdateDateColumn()
  updatedAt: Date;
}
