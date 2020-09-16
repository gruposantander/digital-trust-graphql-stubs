FROM node:12-alpine

RUN npm install -g json-graphql-server

COPY ./data/db.js /tmp

EXPOSE 3000

CMD [ "json-graphql-server", "/tmp/db.js" ]