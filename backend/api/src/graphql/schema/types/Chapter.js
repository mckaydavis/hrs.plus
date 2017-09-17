const typeDefs = `
type Chapter {
  id: ID!
  name: String!
  sections(id: ID): [Section]!
  articles(id: ID): [Article]
  rules: [Rule]
}
`;

const resolver = {};

module.exports = {
  typeDefs,
  resolver,
};
