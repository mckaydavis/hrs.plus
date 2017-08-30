const typeDefs = `
type Title {
  id: ID!
  sub_id: ID
  name: String!
  chapters(id: ID): [Chapter]
}
`;

const resolver = {
  chapters(title, args, context) {
    return [];
  },
};

module.exports = {
  typeDefs,
  resolver,
};
