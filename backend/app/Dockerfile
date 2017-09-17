FROM node:8.4.0

RUN mkdir /app
WORKDIR /app

COPY ["package.json", "/app"]

ARG NODE_ENV=production
ARG EXPRESS_SERVER_PORT=80
RUN ["npm", "install"]

COPY [".", "/app"]

EXPOSE $EXPRESS_SERVER_PORT

CMD ["npm", "start"]
