FROM node:10.15.3
WORKDIR /usr/src/blog

COPY package.json .

RUN npm i -g pm2
RUN npm install
