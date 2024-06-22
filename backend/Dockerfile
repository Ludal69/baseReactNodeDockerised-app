FROM node:18

RUN npm install -g ts-node nodemon

WORKDIR /app

COPY package.json .

RUN npm install

COPY . .

EXPOSE 4000
# required for docker desktop port mapping

CMD ["npm", "run", "dev"]