FROM ubuntu:16.04

USER root

RUN apt-get -y update
RUN apt-get -y install nodejs
RUN apt-get -y install npm
RUN apt -y install nodejs-legacy

ENV APP /root/app
ADD ./ $APP
WORKDIR $APP

RUN npm install

EXPOSE 5003

CMD bash code.sh

