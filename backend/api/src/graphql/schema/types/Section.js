const typeDefs = `
type Section {
  id: ID!
  name: String!
  body: String!
}
`;

const resolver = {};

module.exports = {
  typeDefs,
  resolver,
};
