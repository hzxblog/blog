FROM node:10.7

WORKDIR /usr/src/blog

RUN npm run build \
    npm i -g @adonisjs/cli && \
    npm i -g pm2 && \
    npm i --quiet

CMD  ["pm2-runtime", "start", "server/index.js"]
