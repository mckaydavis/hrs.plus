const cheerio = require('cheerio');
const fs = require('fs');
const path = require('path');
const request = require('request-promise');
const json_data = [];
const chapterSections = {};

fs.readFile(path.resolve(__dirname, 'data.txt'), 'utf8', async (err, data) => {
  await getChapterSections();

  const lines = data.split('\n');

  let division = null;
  let title = null;
  let subtitle = null;

  for (let i = 0; i < lines.length; i++) {
    let line = lines[i];
    let [TYPE, id, name] = line.split('🚀');
    switch (TYPE) {
      case 'DIVISION':
        division = { id, name, _titles: [] };
        break;
      case 'TITLE':
        title = { id, name, sub_id: null, _chapters: [] };
        division._titles.push(title);
        break;
      case 'SUBTITLE':
        title = { id: title.id, name, sub_id: id, _chapters: [] };
        division._titles.push(title);
        break;
      case 'CHAPTER':
        chapter = { id, name };

        // Get all the sections;
        chapter._sections = await chapterSections[id];

        title._chapters.push(chapter);
        break;
      default:
        json_data.push(division);
    }
  }

  fs.writeFileSync(
    path.resolve(__dirname, 'output.json'),
    JSON.stringify(json_data, null, 2)
  );
});

async function getChapterSections() {
  const chapters = await getChapters();
  for (var i = 0; i < chapters.length; i++) {
    let chapter = chapters[i];
    chapterSections[chapter.id] = await getSections(chapter);
  }
}

async function getChapters() {
  console.info(`Retrieving chapter sections...`);
  try {
    const $ = await request({
      uri: 'http://www.capitol.hawaii.gov/docs/HRS.htm',
      transform: function(body) {
        return cheerio.load(body);
      },
    });
    const chapters = $('tr')
      .filter((i, tr) => {
        const chapterId = $(tr).children('td:nth-of-type(1)').text().trim();
        const result = /\d+[A-Z]*/.test(chapterId);
        return result;
      })
      .map((j, tr) => {
        let chapter = $(tr);
        let chapterId = chapter.children('td:nth-of-type(1)').text().trim();
        let link = chapter.find('a').attr('href');
        return { id: chapterId, href: link };
      });
    return chapters.get();
  } catch (err) {
    console.error(err);
  }
}

async function getSections(chapter) {
  try {
    const $ = await request({
      uri: chapter.href,
      transform: function(body) {
        return cheerio.load(body);
      },
    });
    const sectionsMarker = $('p:contains("Section")');
    const sections = sectionsMarker
      .nextAll()
      .filter((i, p) => {
        const text = $(p).text().trim();
        return text.match(/\d+[A-Z]*-\d+(\.\d+)?/);
      })
      .map((i, p) => {
        const text = $(p).text().trim().match(/\d+[A-Z]*-\d+(\.\d+)?/)[0];
        return text;
      })
      .filter((i, text) => {
        return text.startsWith(chapter.id);
      })
      .map((i, text) => {
        return { id: text.slice(text.lastIndexOf('-') + 1) };
      });
    return sections.get();
  } catch (err) {
    console.error(err);
  }
}
