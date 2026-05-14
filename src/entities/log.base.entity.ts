import { Column, Entity, TableInheritance } from "typeorm";
import { BaseEntity } from "./base.entity";

export enum LogTypes {
  SYSTEM = "SYSTEM",
  MANUAL = "MANUAL",
}

@Entity()
@TableInheritance({ column: { type: "varchar", name: "type" } })
export class Log extends BaseEntity {
  @Column({ type: "enum", enum: LogTypes, default: LogTypes.MANUAL })
  logType!: LogTypes;

  @Column({ type: "varchar", nullable: false })
  title!: string;

  @Column({ type: "varchar", nullable: true })
  content?: string | null;
}
