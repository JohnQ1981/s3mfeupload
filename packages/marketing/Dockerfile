FROM node:16.16.0

WORKDIR /marketing

EXPOSE 8081

COPY package.json package.json


RUN npm install --legacy-peer-deps

COPY . .

CMD ["npm","run","start"]


