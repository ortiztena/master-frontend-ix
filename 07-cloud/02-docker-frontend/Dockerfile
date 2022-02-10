FROM node:14-alpine AS base

WORKDIR /usr/app

COPY . .

#prepare static files
FROM base AS build-front

ARG BASE_API_URL
ENV BASE_API_URL=$BASE_API_URL
RUN npm ci
RUN npm run build


#release
FROM base AS release
COPY --from=build-front /usr/app/dist ./public
COPY ./server/package.json .
COPY ./server/index.js .


RUN npm install --only=production


ENV PORT=8083
EXPOSE 8083

CMD ["node", "index.js"]