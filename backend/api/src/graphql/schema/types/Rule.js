const typeDefs = `
type Rule {
  id: ID!
  name: String!
  paragraph: [String]
}
`;

const resolver = {
  paragraph(title, args, context) {
    return [];
  },
};

module.exports = {
  typeDefs,
  resolver,
};
