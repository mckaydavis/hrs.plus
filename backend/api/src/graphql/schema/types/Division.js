const typeDefs = `
type Division {
  id: ID!
  name: String!
  titles(id: ID): [Title]!
}
`;

const resolver = {
  titles(division, args, context) {
    return [];
  },
};

module.exports = {
  typeDefs,
  resolver,
};
