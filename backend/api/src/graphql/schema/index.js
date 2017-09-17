const { makeExecutableSchema } = require('graphql-tools');

const RootQuery = require('./RootQuery');

const Article = require('./types/Article');
const Chapter = require('./types/Chapter');
const Division = require('./types/Division');
const Part = require('./types/Part');
const Rule = require('./types/Rule');
const Section = require('./types/Section');
const Title = require('./types/Title');
const Volume = require('./types/Volume');

const typeDefs = `
schema {
  query: RootQuery
}
`.concat(
  RootQuery.typeDefs,
  Article.typeDefs,
  Chapter.typeDefs,
  Division.typeDefs,
  Part.typeDefs,
  Rule.typeDefs,
  Section.typeDefs,
  Title.typeDefs,
  Volume.typeDefs
);

const resolvers = {
  RootQuery: RootQuery.resolver,
  Article: Article.resolver,
  Chapter: Chapter.resolver,
  Division: Division.resolver,
  Part: Part.resolver,
  Rule: Rule.resolver,
  Section: Section.resolver,
  Title: Title.resolver,
  Volume: Volume.resolver,
};

const executableSchema = makeExecutableSchema({
  typeDefs,
  resolvers,
});

module.exports = executableSchema;
