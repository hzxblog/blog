FROM node:10.15.3

ENV NODE_ENV=production
ENV HOST 0.0.0.0


EXPOSE 3000

RUN npm install
RUN npm run build

CMD ["npm", "start"]
