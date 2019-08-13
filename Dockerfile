FROM node:lts-jessie-slim

WORKDIR /app

COPY index.js .
COPY package.json .
COPY package-lock.json .
RUN npm install

EXPOSE 3000

CMD ["npm","start"]