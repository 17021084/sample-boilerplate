FROM registry.gitlab.com/its-global/biz/auction_portal/base as build

ENV GENERATE_SOURCEMAP false
ENV NODE_ENV production

WORKDIR /home/auction-portal
COPY package.json yarn.lock ./
RUN yarn
COPY . ./
RUN yarn build-stag

EXPOSE 4000

CMD [ "npm", "run", "server"]