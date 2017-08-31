#!/bin/sh

JSON_FILE=../../data/hrs.index.statutes.json
BULK_FILE=bulk_index.json

ES_HOST=localhost
ES_PORT=9200
ES_USER=elastic
ES_PASS=changeme
ES_INDEX=hrs.index
ES_TYPE=default

# combine the json files into a single large file that can be ingested by ES's _bulk endpoint
python load_index_into_elasticsearch.py $JSON_FILE $BULK_FILE

# bulk ingest the json files into the ES index
curl -s -u $ES_USER:$ES_PASS $ES_HOST:$ES_PORT/$ES_INDEX/$ES_TYPE/_bulk --data-binary @$BULK_FILE
