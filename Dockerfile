FROM node:16.20 as build

WORKDIR /app

COPY ./admin/package.json /app/admin/package.json
COPY ./admin/package-lock.json /app/admin/package-lock.json
COPY ./web/package.json /app/web/package.json
COPY ./web/package-lock.json /app/web/package-lock.json

RUN npm config set registry https://registry.npm.taobao.org && npm config set strict-ssl false\
  && cd /app/admin && npm install \
  && cd /app/web && npm install

COPY ./admin /app/admin
COPY ./web /app/web

RUN cd /app/admin/node_modules/.bin && chmod 777 vue-cli-service
RUN cd /app/web/node_modules/.bin && chmod 777 vue-cli-service

RUN cd /app/admin && npm run build:prod \
  && cd /app/web && npm run build

FROM nginx

COPY ./nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=build /app/admin/dist /usr/share/nginx/html/admin
COPY --from=build /app/web/dist /usr/share/nginx/html/web
