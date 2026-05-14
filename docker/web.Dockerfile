FROM node:20-alpine AS base

FROM base AS builder
RUN apk add --no-cache libc6-compat
RUN npm install -g turbo
WORKDIR /app
COPY . .
RUN turbo prune web --docker

FROM base AS installer
RUN apk add --no-cache libc6-compat
WORKDIR /app
COPY --from=builder /app/out/json/ .
COPY --from=builder /app/out/package-lock.json ./package-lock.json
RUN npm install

COPY --from=builder /app/out/full/ .
COPY turbo.json turbo.json
RUN if [ ! -d node_modules/react-dom ] && [ -d apps/web/node_modules/react-dom ]; then ln -s ../apps/web/node_modules/react-dom node_modules/react-dom; fi
RUN npx turbo build --filter=web

FROM base AS runner
WORKDIR /app
RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs
USER nextjs
COPY --from=installer /app/apps/web/next.config.ts .
COPY --from=installer /app/apps/web/package.json .
COPY --from=installer /app/apps/web/.next ./.next
COPY --from=installer /app/apps/web/public ./public
COPY --from=installer /app/node_modules ./node_modules

CMD ["npm", "start"]
