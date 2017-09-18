const titles = require('../../data/titles.json');

const typeDefs = `
type Division {
  id: ID!
  name: String!
  titles(id: ID): [Title]!
}
`;

const resolver = {
  titles(division, args, context) {
    const divisionTitles = titles.filter(
      t => division.titles.indexOf(t.uuid) > -1
    );
    if (args.id) {
      return divisionTitles.filter(t => t.id == args.id);
    }
    return divisionTitles;
  },
};

module.exports = {
  typeDefs,
  resolver,
};
