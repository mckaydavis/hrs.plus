#!/bin/bash
set -ex
apt-get remove docker docker.io
wget -qO- https://get.docker.com/ | sudo sh
cd /usr/local/bin
wget https://github.com/docker/compose/releases/download/1.16.0-rc2/docker-compose-Linux-x86_64
chmod a+x docker-compose-Linux-x86_64 
ln -s docker-compose-Linux-x86_64 docker-compose
