const typeDefs = `
type Article {
  id: ID!
  name: String!
  sections(id: ID): [Section]!
  parts: [Part]
}
`;

const resolver = {};

module.exports = {
  typeDefs,
  resolver,
};
