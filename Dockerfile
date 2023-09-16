# Stage 1: INstall dependencies
FROM node:lts-alpine as deps

RUN apk --update --no-cache add libc6-compat

WORKDIR /app

COPY package*.json ./

RUN npm ci

# Stage 2: Build the app
FROM node:lts-alpine as build

WORKDIR /app

COPY --from=deps /app/node_modules ./node_modules
COPY . .

RUN npm run build

# Stage 3: Run the app
FROM node:lts-alpine

WORKDIR /app

ENV NODE_ENV production

EXPOSE 3000

COPY --from=build /app/next.config.js ./next.config.js
COPY --from=build /app/public ./public
COPY --from=build /app/.next ./.next
COPY --from=build /app/node_modules ./node_modules

CMD ["node_modules/.bin/next", "start"]