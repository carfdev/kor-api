FROM oven/bun AS build

WORKDIR /app

# Cache packages installation
COPY package.json package.json
COPY bun.lockb bun.lockb

RUN bun install

COPY ./src ./src
COPY ./prisma ./prisma
COPY ./tsconfig.json ./tsconfig.json

ENV NODE_ENV=production
ENV DATABASE_URL="file:./dev.db"

RUN bunx prisma migrate deploy
# Generar Prisma Client y Query Engine
RUN bunx prisma generate

RUN bun run build

FROM gcr.io/distroless/base

WORKDIR /app

COPY --from=build /lib/x86_64-linux-gnu/ /lib/x86_64-linux-gnu
COPY --from=build /usr/lib/x86_64-linux-gnu/ /usr/lib/x86_64-linux-gnu


COPY --from=build /app/node_modules/.prisma/client/libquery_engine-debian-openssl-1.1.x.so.node ./libquery_engine-debian-openssl-1.1.x.so.node
COPY --from=build /app/run run

USER nonroot

ENV NODE_ENV=production
ENV PRISMA_QUERY_ENGINE_LIBRARY=/app/libquery_engine-debian-openssl-1.1.x.so.node

CMD ["./run"]

EXPOSE 3000
