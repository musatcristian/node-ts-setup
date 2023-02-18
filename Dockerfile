FROM node:18-alpine

WORKDIR /ts-node-setup

COPY package.json package-lock.json .

RUN npm install

COPY . .

RUN npm run build

EXPOSE 4000

CMD ["node", "dist/server.js"]