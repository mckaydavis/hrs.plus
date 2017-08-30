#!/usr/bin/python
import tarfile
import json
import sys

# python load_hrs_into_elasticsearch.py [hrs.json.tar.gz] [bulk.json]
tar = tarfile.open(sys.argv[1], "r:gz")

with open(sys.argv[2], 'w') as output:
    for filename in tar.getnames()[1:]: # the first object in the tar is the json/ dir
        raw_json = tar.extractfile(filename).read()

        # parse the json to extract the statute ID
        parsed_json = json.loads(raw_json)
        statute = '{}-{}'.format(parsed_json['chapter'], parsed_json['section'])

        # ES _bulk endpoint format
        output.write('%s\n' % json.dumps({'index': { '_id':statute }}));
        output.write('%s\n' % raw_json)
