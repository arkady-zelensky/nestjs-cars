FROM node:18.12.1

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build

EXPOSE 8080

ENV PORT 8080

CMD ["node", "dist/src/main.js"]