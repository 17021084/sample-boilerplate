FROM registry.gitlab.com/its-global/biz/auction_portal/base as build

ENV GENERATE_SOURCEMAP false
ENV NODE_ENV production
ENV INSTALL_PATH=/home/auction-portal

WORKDIR $INSTALL_PATH

ADD package.json $INSTALL_PATH
ADD yarn.lock $INSTALL_PATH

RUN cd $INSTALL_PATH && \
  yarn install

COPY . .

RUN ls $INSTALL_PATH

RUN yarn build

EXPOSE 4000

CMD [ "npm", "run", "server"]