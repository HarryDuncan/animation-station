# syntax=docker/dockerfile:1

FROM node:14

WORKDIR /dockerManager

COPY package*.json ./

RUN npm install

COPY . .
CMD ["node", "index.js"]
