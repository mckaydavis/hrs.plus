const divisions = require('../data/divisions.json');
const titles = require('../data/titles.json');
const subtitles = require('../data/subtitles.json');

const typeDefs = `
type RootQuery {
  query: RootQuery!
  divisions(id: ID): [Division]!
  titles(divisionId: ID! id: ID): [Title]!
  subtitles(divisionId: ID! titleId: ID! id: ID): [Title]!
}
`;

function getById(arr, id) {
  return arr.filter(i => i.id == id);
}

function getDivisionById(id) {
  return getById(divisions, id);
}

function getTitleById(id) {
  return getById(titles, id);
}

const resolver = {
  divisions(_, args, context) {
    if (args.id) {
      return getDivisionById(args.id);
    }
    return divisions;
  },
  titles(_, args, context) {
    const [division] = getDivisionById(args.divisionId);
    const divisionTitles = titles.filter(
      t => division.titles.indexOf(t.uuid) > -1
    );
    if (args.id) {
      return getById(divisionTitles, args.id);
    }
    return divisionTitles;
  },
  subtitles(_, args, context) {
    const [division] = getDivisionById(args.divisionId);
    const [title] = getById(
      titles.filter(t => division.titles.indexOf(t.uuid) > -1),
      args.titleId
    );
    const titleSubtitles = getById(
      subtitles.filter(st => title.subtitles.indexOf(st.uuid) > -1)
    );
    if (args.id) {
      return titleSubtitles.filter(d => d.id == args.id);
    }
    return titleSubtitles;
  },
};

module.exports = {
  typeDefs,
  resolver,
};
