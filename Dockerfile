FROM node:12

COPY ./package.json /app/package.json
COPY ./package-lock.json /app/package-lock.json

WORKDIR /app

RUN npm ci

COPY ./node_modules /app/node_modules

COPY ./dist /app/dist

EXPOSE 3000

CMD   ["node", "dist/index.js"]