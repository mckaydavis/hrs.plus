const data = require("./data.json");

const request = require("request-promise");

async function fetchSectionByCode(code) {
  const response = await request({
    uri: `http://138.68.44.30/json/${code}.json`,
    json: true
  });
  return {
    id: response.section,
    name: response.section_text,
    body: [].concat(response.text).join("\n")
  };
}

const DIVISIONS = data;
const TITLES = DIVISIONS.map(division => division._titles).reduce(
  (collection, divisionTitles) => collection.concat(divisionTitles),
  []
);
const CHAPTERS = TITLES.map(title => title._chapters).reduce(
  (collection, titleChapters) => collection.concat(titleChapters),
  []
);
const SECTIONS = CHAPTERS.map(chapter => chapter._sections).reduce(
  (collection, chapterSections) => collection.concat(chapterSections),
  []
);

module.exports = {
  RootQuery() {
    return {
      divisions(_, args) {
        if (!args.id) {
          return DIVISIONS;
        }
        return DIVISIONS.filter(division => division.id == args.id);
      },
      titles(_, args) {
        if (!args.id) {
          return TITLES;
        }
        return TITLES.filter(title => title.id == args.id);
      },
      chapters(_, args) {
        if (!args.id) {
          return CHAPTERS;
        }
        return CHAPTERS.filter(chapter => chapter.id == args.id);
      },
      async sections(_, args) {
        if (!args.code) {
          return SECTIONS;
        }
        return [await fetchSectionByCode(args.code)];
      }
    };
  },
  Chapter(title) {
    return {
      sections(chapter, args) {
        let sections = chapter._sections;
        if (args.id) {
          sections = sections.filter(section => section.id == args.id);
        }
        return sections.map(async section => {
          return await fetchSectionByCode(`${chapter.id}-${section.id}`);
        });
      }
    };
  },
  Division() {
    return {
      titles(division, args, context) {
        if (!args.id) {
          return division._titles;
        }
        return division._titles.filter(title => title.id == args.id);
      }
    };
  },
  Title() {
    return {
      chapters(title, args, context) {
        if (!args.id) {
          return title._chapters;
        }
        return title._chapters.filter(chapter => chapter.id == args.id);
      }
    };
  }
};
