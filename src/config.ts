import "dotenv/config";

interface DbConfig {
  username: string;
  password: string;
  host: string;
  port: number;
  database: string;
}

interface JwtConfig {
  accessSecret: string;
  refreshSecret: string;
}

interface Config {
  node_env: string; // "production" | "development"
  host: string;
  port: number;
  apiPrefix: string;
  frontendUrl: string;
  db: DbConfig;
  jwt: JwtConfig;
}

const config: Config = {
  node_env: process.env["NODE_ENV"] || "development",
  host: process.env["NODE_ENV"] === "production" ? "0.0.0.0" : "localhost",
  port: 3000,
  apiPrefix: "api/v1",
  frontendUrl: "api/v1",
  db: {
    username: process.env["DB_USERNAME"] ?? "postgres",
    password: process.env["DB_PASSWORD"] ?? "postgres",
    host: process.env["DB_HOST"] ?? "localhost",
    port: Number(process.env["DB_PORT"]) ?? 5432,
    database: process.env["DB_DATABASE"] ?? "webflancer",
  },
  jwt: {
    accessSecret: process.env["JWT_ACCESS_TOKEN"] ?? "supersecret",
    refreshSecret: process.env["JWT_REFRESH_TOKEN"] ?? "supersecret",
  },
};

export default config;
