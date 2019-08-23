import CHAPTER_LIST from './data/chapter-list.json';

export default {
  getChapters() {
    const chapters = [];
    for (let chapter of CHAPTER_LIST) {
      chapters.push({
        name: chapter,
        isAFFC: chapter.includes('AFFC')
      });
    }
    return chapters;
  }
}
