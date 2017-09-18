const sections = require('../../data/sections.json');

const typeDefs = `
type Part {
  id: ID
  name: String
  subpart: String
  sections(id: ID): [Section]!
}
`;

const resolver = {
  sections(part, args, context) {
    const partSections = sections.filter(
      p => part.sections.indexOf(p.uuid) > -1
    );
    if (args.id) {
      return partSections.filter(p => p.id == args.id);
    }
    return partSections;
  },
};

module.exports = {
  typeDefs,
  resolver,
};
