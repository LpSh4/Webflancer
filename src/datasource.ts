import { DataSource } from "typeorm";
import config from "./config";

export default new DataSource({
  type: "postgres",
  host: config.db.host,
  port: config.db.port,
  username: config.db.username,
  password: config.db.password,
  database: config.db.database,

  entities: ["dist/entities/*.js"],
  migrations: [__dirname + "/migrations/*.{js,ts}"],

  synchronize: false,
  migrationsRun: false,
  logging: true,
});
