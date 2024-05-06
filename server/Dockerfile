FROM node:16.20

WORKDIR /app

COPY . .
#RUN npm config set registry https://registry.npm.taobao.org && npm config set strict-ssl false && npm install && npm install -g pm2
RUN npm config set registry https://registry.npm.taobao.org && npm config set strict-ssl false && npm install -g cnpm && cnpm install bcrypt && cnpm install -g pm2

CMD ["bash", "run.sh"]


## 使用官方Node.js镜像作为基础镜像
#FROM node:16.20
#
## 设置工作目录
#WORKDIR /app
#
## 复制package.json和package-lock.json文件到工作目录
##COPY package*.json ./
#COPY . .
##RUN npm install -g cnpm --registry=https://registry.npm.taobao.org  && npm config set strict-ssl false
#
#
## 安装项目依赖
#RUN npm config set registry https://registry.npm.taobao.org && npm config set strict-ssl false && npm install -g cnpm && cnpm install bcrypt
#
#
#RUN cnpm install
#
## 暴露Node.js应用所需的端口
#EXPOSE 3000
#
## 启动Node.js应用
#CMD [ "node", "app.js" ]

