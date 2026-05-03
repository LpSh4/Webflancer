import fp from "fastify-plugin";
import { FastifyInstance, FastifyPluginAsync } from "fastify";
import { diContainer, fastifyAwilixPlugin } from "@fastify/awilix";
import { asFunction, asValue, InjectionMode } from "awilix";
import config from "../config";

const awilixPlugin: FastifyPluginAsync = async (fastify: FastifyInstance) => {
  await fastify.register(fastifyAwilixPlugin, {
    injectionMode: InjectionMode.PROXY,
    disposeOnClose: true,
    disposeOnResponse: true,
  });

  diContainer.register({
    orm: asValue(fastify.orm),
    em: asFunction(({ orm }) => orm.manager).scoped(),
    config: asValue(config),
  });
  // fastify.addHook("onRequest", (req: FastifyRequest, res: FastifyReply) => {});
};

export default fp(awilixPlugin);
