import Fastify, { FastifyInstance } from "fastify";
import config from "./config";
import corsPlugin from "./plugins/cors";
import diPlugin from "./plugins/awilix";
import { DataSource } from "typeorm";
import { initORM } from "./infrastructure";
// import ioPlugin from "./plugins/socket";

interface FastifyOptions {
  logger: any;
  ajv: any;
}

declare module "fastify" {
  interface FastifyInstance {
    orm: typeof DataSource;
  }
}

class Server {
  fastify: FastifyInstance;
  orm!: DataSource;

  constructor() {
    const isDev = config.node_env === "development";
    this.fastify = Fastify({
      logger: {
        level: "debug",
        transport: isDev
          ? {
              target: "pino-pretty",
              options: { colorized: true },
            }
          : undefined,
      },
      ajv: { customOptions: { coerceTypes: true } },
    } as FastifyOptions);
  }

  async startHttpServer() {
    const address = await this.fastify.listen({
      host: config.host,
      port: config.port,
    });
    this.fastify.log.info(
      `Server is listening on ${address}/${config.apiPrefix}`,
    );
  }

  async registerPlugins() {
    await this.fastify.register(corsPlugin);
    await this.fastify.register(diPlugin);
    // await this.fastify.register(ioPlugin);
  }

  async registerRoutes() {}

  async initInfrastructure() {
    this.orm = await initORM();
    this.fastify.log.info(`Database initialized`);
  }

  async start() {
    await this.initInfrastructure();
    await this.registerRoutes();
    await this.registerPlugins();
    await this.startHttpServer();
  }
}

(async () => {
  const app = new Server();
  try {
    await app.start();
  } catch (e) {
    console.error(`Failed to start: ${e}`);
    process.exit(1);
  }
})();
