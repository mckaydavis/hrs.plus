const typeDefs = `
type Chapter {
  id: ID!
  name: String!
  sections(id: ID): [Section]!
}
`;

const resolver = {};

module.exports = {
  typeDefs,
  resolver,
};
