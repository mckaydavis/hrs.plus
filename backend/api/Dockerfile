FROM node:8.4.0

RUN mkdir /app
WORKDIR /app

COPY . /app

RUN npm install --production

EXPOSE 8080

CMD npm start
