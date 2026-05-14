import { ChildEntity, Column } from "typeorm";
import { Role, User } from "./user.entity";

@ChildEntity(Role.MODERATOR)
export class Moderator extends User {
  @Column({ type: "varchar" })
  accessLevel?: string;
}
