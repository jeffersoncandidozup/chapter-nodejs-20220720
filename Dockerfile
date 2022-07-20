FROM node:16.15.0-alpine AS compile

USER root
RUN mkdir -p /usr/src/build
WORKDIR /usr/src/build
COPY ./src ./src
COPY ["babel.config.js", "cdk.json", "package.json", "package-lock.json*", "npm-shrinkwrap.json*", "tsconfig.json", "/usr/src/build/"]

RUN npm install --quiet typescript@4.6.4 -g
RUN npm install  --development --silent
RUN npm cache verify
RUN npm run clean-build
RUN npm install
RUN npm run build

RUN mkdir -p /usr/src/chapter-nodejs/src
COPY ["cdk.json", "package.json", "package-lock.json*", "npm-shrinkwrap.json*", "/usr/src/chapter-nodejs/"]
RUN cp -r ./dist/src/* /usr/src/chapter-nodejs/src

FROM node:16.15.0-alpine AS build
USER root
WORKDIR /usr/src/chapter-nodejs
COPY --from=compile /usr/src/chapter-nodejs $WORKDIR
RUN npm ci --only=production

FROM node:16.15.0-alpine
ENV NODE_ENV production
WORKDIR /usr/src/chapter-nodejs

COPY --from=build /usr/src/chapter-nodejs $WORKDIR
RUN mkdir cdk.out && \
  npm install --quiet aws-cdk@2.30.0 -g

ENTRYPOINT ["cdk"]