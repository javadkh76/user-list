FROM node:18-alpine AS base
WORKDIR /app

COPY package.json yarn.lock ./
RUN yarn install --frozen-lockfile

# -----------------------------------
# Development Stage
# -----------------------------------
FROM base AS dev
COPY . .
CMD ["yarn", "dev", "--host"]

# -----------------------------------
# Production Stage
# -----------------------------------
FROM base AS build
COPY . .
RUN yarn build

FROM nginx:alpine AS prod
COPY --from=build /app/dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]