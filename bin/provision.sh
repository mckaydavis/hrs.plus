#!/bin/bash
# must be run as root
# portions cribbed from codeforhawaii/aclu/provision-debian.sh

set -e # stop bash execution on on first error
set -x # echo bash commands before execution, useful for debugging

NODE_VERSION=8.4.0 # latest Node version as of 15-Aug-2017
JQ_VERSION=1.5 # latest jq version as of 15-Aug-2015
DOCKER_COMPOSE_VERSION=1.16.0-rc2

sudo apt-get update
sudo apt-get install -y \
     git \
     httpie

# install ./jq (https://stedolan.github.io/jq/)
sudo wget -qO /usr/local/bin/jq https://github.com/stedolan/jq/releases/download/jq-${JQ_VERSION}/jq-linux64
sudo chmod a+x /usr/local/bin/jq

# nuke any previous versions of node in /usr/local/node
sudo rm -rf /usr/local/node-*-linux-x64 /usr/local/node

# donwnload and unpack node into /usr/local
cd /usr/local
wget -qO- https://nodejs.org/dist/v${NODE_VERSION}/node-v${NODE_VERSION}-linux-x64.tar.xz | sudo tar xvJ
sudo ln -s /usr/local/node-v${NODE_VERSION}-linux-x64 /usr/local/node

# install yarn
sudo env "PATH=/usr/local/node/bin/:${PATH}" npm install -g yarn

# remove previous docker
apt-get remove docker docker.io

# install latest docker
wget -qO- https://get.docker.com/ | sudo sh

# remove previous docker-compose
rm -rf /usr/local/bin/docker-compose
# download latest docker-compose
wget -qO /usr/local/bin/docker-compose https://github.com/docker/compose/releases/download/${DOCKER_COMPOSE_VERSION}/docker-compose-Linux-x86_64
chmod a+x /usr/local/bin/docker-compose

# Linux kernel settings for ElasticSearch
# https://www.elastic.co/guide/en/elasticsearch/reference/5.5/docker.html#docker-prod-prerequisites
echo "vm.max_map_count=262144" >> /etc/sysctl.conf
sysctl -w vm.max_map_count=262144


sudo sg vagrant <<\DEVOPS_BLOCK
    cd /hrs.plus/backend
    cp dotenv .env
    docker-compose build
    docker-compose up -d
    echo http://localhost:8080/
DEVOPS_BLOCK

