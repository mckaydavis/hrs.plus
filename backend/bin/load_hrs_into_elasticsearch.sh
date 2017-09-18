#!/bin/sh

TAR_FILE=hrs.json.tar.gz
BULK_FILE=bulk.json

ES_HOST=localhost
ES_PORT=9200
ES_USER=elastic
ES_PASS=changeme
ES_INDEX=hrs.statutes
ES_TYPE=default

# grab HRS tarball
wget --no-check-certificate -N https://138.68.44.30/$TAR_FILE

# combine the json files into a single large file that can be ingested by ES's _bulk endpoint
python load_hrs_into_elasticsearch.py $TAR_FILE $BULK_FILE

# bulk ingest the json files into the ES index
curl -s -u $ES_USER:$ES_PASS $ES_HOST:$ES_PORT/$ES_INDEX/$ES_TYPE/_bulk --data-binary @$BULK_FILE
