FROM node:12-alpine

RUN npm install -g json-graphql-server

COPY ./data/db.js /tmp

EXPOSE 8080

CMD [ "json-graphql-server", "/tmp/db.js", "-p 8080" ]