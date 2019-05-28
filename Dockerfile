FROM node:10.15.3

RUN mkdir -p /usr/src/blog

WORKDIR /usr/src/blog

ADD package.json /usr/src/blog

RUN npm install

RUN npm run build

RUN npm run start

ADD . /usr/src/blog

