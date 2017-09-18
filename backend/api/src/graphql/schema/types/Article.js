const parts = require('../../data/parts');
const sections = require('../../data/sections');

const typeDefs = `
type Article {
  id: ID!
  name: String!
  sections(id: ID): [Section]!
  parts: [Part]
}
`;

const resolver = {
  parts(article, args, context) {
    const articleParts = parts.filter(p => article.parts.indexOf(p.uuid) > -1);
    if (args.id) {
      return articleParts.filter(p => p.id == args.id);
    }
    return articleParts;
  },
  sections(article, args, context) {
    const articleSections = sections.filter(
      s => article.sections.indexOf(s.uuid) > -1
    );
    if (args.id) {
      return articleSections.filter(a => a.id == args.id);
    }
    return articleSections;
  },
};

module.exports = {
  typeDefs,
  resolver,
};
