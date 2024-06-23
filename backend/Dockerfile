FROM node:18

RUN npm install -g ts-node nodemon

WORKDIR /app

COPY package.json .

RUN npm install

COPY . .

EXPOSE 4000
EXPOSE 9229

CMD ["npm", "run", "watch"]