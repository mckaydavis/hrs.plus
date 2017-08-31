#!/usr/bin/python
import json
import sys

# python load_index_into_elasticsearch.py [hrs.index.statutes.json] [bulk_index.json]
index = json.load(open(sys.argv[1], 'r'))

with open(sys.argv[2], 'w') as output:
    for row in index:
        # ES _bulk endpoint format
        output.write('%s\n' % json.dumps({'index': {}}));
        output.write('%s\n' % json.dumps({'terms':row[:-1], 'statutes':row[-1]}))
