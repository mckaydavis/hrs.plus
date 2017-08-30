const { makeExecutableSchema } = require('graphql-tools');

const RootQuery = require('./RootQuery');

const Chapter = require('./types/Chapter');
const Division = require('./types/Division');
const Section = require('./types/Section');
const Title = require('./types/Title');

const typeDefs = `
schema {
  query: RootQuery
}
`.concat(
  RootQuery.typeDefs,
  Chapter.typeDefs,
  Division.typeDefs,
  Section.typeDefs,
  Title.typeDefs
);

const resolvers = {
  RootQuery: RootQuery.resolver,
  Chapter: Chapter.resolver,
  Division: Division.resolver,
  Section: Section.resolver,
  Title: Title.resolver,
};

const executableSchema = makeExecutableSchema({
  typeDefs,
  resolvers,
});

module.exports = executableSchema;
