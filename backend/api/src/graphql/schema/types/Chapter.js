const articles = require('../../data/articles.json');
const parts = require('../../data/parts.json');
const sections = require('../../data/sections.json');

const typeDefs = `
type Chapter {
  id: ID!
  name: String!
  sections(id: ID): [Section]!
  articles(id: ID): [Article]
  parts(id: ID): [Part]
  rules: [Rule]
}
`;

const resolver = {
  articles(chapter, args, context) {
    const chapterArticles = articles.filter(
      a => chapter.articles.indexOf(a.uuid) > -1
    );
    if (args.id) {
      return chapterArticles.filter(a => a.id == args.id);
    }
    return chapterArticles;
  },
  parts(chapter, args, context) {
    const chapterParts = parts.filter(p => chapter.parts.indexOf(p.uuid) > -1);
    if (args.id) {
      return chapterParts.filter(p => p.id == args.id);
    }
    return chapterParts;
  },
  sections(chapter, args, context) {
    const chapterSections = sections.filter(
      s => chapter.sections.indexOf(s.uuid) > -1
    );
    if (args.id) {
      return chapterSections.filter(s => s.id == args.id);
    }
    return chapterSections;
  },
};

module.exports = {
  typeDefs,
  resolver,
};
