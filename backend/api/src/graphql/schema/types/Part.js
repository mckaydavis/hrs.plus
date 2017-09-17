const typeDefs = `
type Part {
  id: ID!
  name: String!
  sections(id: ID): [Section]!
  subparts(id: ID): [Part]
}
`;

const resolver = {
  subparts(part, args, context) {
    return [];
  },
};

module.exports = {
  typeDefs,
  resolver,
};
