const typeDefs = `
type Title {
  id: ID!
  name: String!
  chapters(id: ID): [Chapter]
  subtitles(id: ID): [Title]
}
`;

const resolver = {
  chapters(title, args, context) {
    return [];
  },
  subtitles(title, args, context) {
    return [];
  },
};

module.exports = {
  typeDefs,
  resolver,
};
