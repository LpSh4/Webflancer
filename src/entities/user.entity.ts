import { Column, Entity, TableInheritance } from "typeorm";
import { BaseEntity } from "./base.entity";

export enum Role {
  ADMIN = "ADMIN",
  MODERATOR = "MODERATOR",
  CLIENT = "CLIENT",
  DEVELOPER = "DEVELOPER",
}

@Entity("user")
@TableInheritance({ column: { type: "varchar", name: "role" } })
export class User extends BaseEntity {
  @Column({ type: "varchar" })
  role!: Role;

  @Column({ type: "varchar", unique: true })
  login!: string;

  @Column({ type: "varchar", unique: true })
  email!: string;

  @Column({ type: "boolean", default: false })
  verifiedEmail!: boolean;

  @Column({ type: "varchar", unique: true })
  phoneNumber!: string;

  @Column({ type: "varchar" })
  password!: string;

  @Column({ type: "varchar" })
  displayedName!: string;

  @Column({ type: "varchar" })
  name!: string;

  @Column({ type: "varchar" })
  surname?: string;

  @Column({ type: "varchar" })
  profilePicture?: string;

  @Column({ type: "date" })
  lastOnline?: Date | null;

  // @OneToMany(() => RefreshToken, (rt) => rt.user)
  // refreshTokens = new Collection<RefreshToken>(this);
}
