const typeDefs = `
type Section {
  id: ID!
  name: String!
  paragraph: [String]
  subsections(id: ID): [Section]
}
`;

const resolver = {
  subsections(title, args, context) {
    return [];
  },
};

module.exports = {
  typeDefs,
  resolver,
};
