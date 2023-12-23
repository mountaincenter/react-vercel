FROM node:latest

RUN npm install -g npm@latest
RUN mkdir react-app

RUN npm -g install serve vite

WORKDIR /usr/src/app/react-app
