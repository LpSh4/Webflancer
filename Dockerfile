# Stage 1: Builder
FROM node:20-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npx tsc -p tsconfig.json
CMD ["npm run migration:create && npm run migration:up"]

# Stage 2: Runner
FROM node:20-alpine AS runner
WORKDIR /app
ENV NODE_ENV=production
COPY package*.json ./
RUN npm install --omit=dev
COPY --from=builder /app/dist ./dist
USER node
EXPOSE 3000
CMD ["sh", "-c", "node dist/server.js"]