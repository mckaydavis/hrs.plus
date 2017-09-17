const typeDefs = `
type Volume {
  id: ID!
  divisions(id: ID): [Division]!
}
`;

const resolver = {
  divisions(volume, args, context) {
    return [];
  },
};

module.exports = {
  typeDefs,
  resolver,
};
