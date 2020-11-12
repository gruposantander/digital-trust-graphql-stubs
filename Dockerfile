FROM node:12-alpine

WORKDIR /tmp
RUN mkdir -p /tmp/people


COPY server.js /tmp/
COPY package.json /tmp/
COPY ./people/* /tmp/people/

RUN npm install

ENV PORT=8080

CMD [ "node", "server.js" ]
