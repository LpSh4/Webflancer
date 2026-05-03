import { FastifyInstance, FastifyPluginAsync } from "fastify";
import fp from "fastify-plugin";
import cors from "@fastify/cors";

const corsPlugin: FastifyPluginAsync = async (fastify: FastifyInstance) => {
  await fastify.register(cors, {
    origin: [
      "https://ryban.ru",
      "https://www.ryban.ru",
      "http://localhost:3000",
      "https://localhost:5173",
    ],
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS", "PATCH"],
  });
};

export default fp(corsPlugin);
