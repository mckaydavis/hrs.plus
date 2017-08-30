const typeDefs = `
type RootQuery {
  query: RootQuery!
  divisions(id: ID): [Division]
  titles(id: ID): [Title]
  chapters(id: ID): [Chapter]
  sections(code: ID): [Section]
}
`;

const resolver = {};

module.exports = {
  typeDefs,
  resolver,
};
