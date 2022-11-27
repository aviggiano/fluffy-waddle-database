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
import { Audit } from "./Audit.entity";

export type Severity = "low" | "medium" | "high";

@Entity()
export class Finding {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Audit, (audit) => audit.id, { eager: true })
  @JoinColumn()
  audit: Audit;

  @Column("int", { name: "auditId" })
  @Index()
  auditId: Audit["id"];

  @Column()
  externalId: number;

  @Column()
  severity: Severity;

  @Column()
  title: string;

  @Column()
  body: string;

  @Column()
  url: string;

  @CreateDateColumn()
  createdAt: Date;
  @UpdateDateColumn()
  updatedAt: Date;
}
