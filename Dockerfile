FROM node:18-alpine

WORKDIR /ts-node-setup

COPY package.json package-lock.json ./ts-node-setup

RUN npm ci

COPY . .

# RUN npm run build

EXPOSE 80

CMD ["node", "dist/src/server.js"]