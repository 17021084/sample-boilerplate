FROM node:12.20

WORKDIR /home/auction-portal
COPY package.json yarn.lock ./

ENV PATH /home/auction-portal/node_modules/.bin:$PATH

RUN npm install -g yarn && \
  yarn install

COPY . ./