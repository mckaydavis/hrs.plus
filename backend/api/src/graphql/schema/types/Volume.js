const divisionJSON = require('../../data/divisions.json');

const typeDefs = `
type Volume {
  id: ID!
  divisions(id: ID): [Division]!
}
`;

const resolver = {
  divisions(volume, args, context) {
    return divisionJSON.filter(d => volume.divisions.indexOf(d.uuid) > -1);
  },
};

module.exports = {
  typeDefs,
  resolver,
};
