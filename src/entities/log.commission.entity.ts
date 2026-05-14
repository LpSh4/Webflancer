import { ChildEntity, Column, JoinColumn, ManyToOne } from "typeorm";
import type { Relation } from "typeorm";
import { Commission } from "./commission.entity";
import { Log } from "./log.base.entity";

@ChildEntity()
export class CommissionLog extends Log {
  @Column({ name: "commission_id" })
  commissionId!: string;

  @ManyToOne(() => Commission, (commission) => commission.logs)
  @JoinColumn({ name: "commission_id" })
  commission!: Relation<Commission>;
}
