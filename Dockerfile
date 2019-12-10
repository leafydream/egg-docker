FROM node:12.13-alpine

MAINTAINER maclaren

RUN mkdir -p /usr/src/app

WORKDIR /usr/src/app

COPY package.json /usr/src/app/package.json

RUN npm i --registry=https://registry.npm.taobao.org

COPY . /usr/src/app

EXPOSE 7000

CMD npx egg-scripts start --port 7000 --title=egg-server-egg-docker

