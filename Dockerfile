FROM node:18-alpine

WORKDIR /ts-node-setup

COPY package.json package-lock.json .

RUN npm ci

COPY . .

EXPOSE 80

CMD "npm" "run" "dev"