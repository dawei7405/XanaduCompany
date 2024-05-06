FROM node:16.20

WORKDIR /app

COPY . .
RUN npm config set registry https://registry.npm.taobao.org && npm config set strict-ssl false && npm install && npm install -g pm2

CMD ["bash", "run.sh"]
