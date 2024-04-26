FROM node:16

WORKDIR /app

COPY . .
RUN npm config set registry http://registry.npm.taobao.org && npm install && npm install -g pm2

CMD ["bash", "run.sh"]
