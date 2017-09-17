const typeDefs = `
type RootQuery {
  query: RootQuery!
  divisions(id: ID): [Division]!
}
`;

const resolver = {};

module.exports = {
  typeDefs,
  resolver,
};
