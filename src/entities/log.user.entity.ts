import { ChildEntity, Column, JoinColumn, ManyToOne } from "typeorm";
import type { Relation } from "typeorm";
import { User } from "./user.entity";
import { Log } from "./log.base.entity";

@ChildEntity()
export class UserLog extends Log {
  @Column({ name: "user_id" })
  userId!: string;

  @ManyToOne(() => User, (user) => user.logs)
  @JoinColumn({ name: "user_id" })
  user!: Relation<User>;
}
