#!/bin/bash
#wget https://raw.githubusercontent.com/Neilpang/acme.sh/master/acme.sh
set -ex
./acme.sh --issue -d dev.hrs.plus -w /hrs.plus/web/html/ --fullchain-file /hrs.plus/web/cert/cert.pem --key-file /hrs.plus/web/cert/privkey.pem
