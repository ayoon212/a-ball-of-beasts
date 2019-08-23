<template>
  <div class="chapter-list">
    <ol>
      <li v-for="(chapter, index) in chapters" :key="index">
        <div class="center">{{ index+1 }}.</div>
        <div :class="[ 'row-content',
          chapter.isAFFC ? 'left' : 'right',
          chapter.name === highlightedChapter ? 'highlight' : ''
        ]" @mouseenter="highlight(chapter.name)" @mouseleave="stopHighlight()">
          <span class="chapter">{{ chapter.name }}<span v-if="chapter.index"> {{ chapter.index }}</span></span>
          <span class="book">&nbsp;{{ chapter.book }}&nbsp;</span>
        </div>
        <!-- Counterpart placeholder div -->
        <div :class="!chapter.isAFFC ? 'left' : 'right'">&nbsp;</div>
      </li>
    </ol>
  </div>
</template>

<script>
// import ChapterService from '../chapter-service.js';
import CHAPTER_LIST from '../data/chapter-list.json';

export default {
  name: 'ChapterList',
  data() {
    return {
      chapters: CHAPTER_LIST,
      highlightedChapter: null
    }
  },
  methods: {
    highlight(chapterName) {
      this.highlightedChapter = chapterName;
    },
    stopHighlight() {
      this.highlightedChapter = null;
    }
  }
}
</script>

<style scoped>
ol {
  list-style: none;
  padding: 0;
}
ol li {
  display: flex;
  justify-content: space-around;
  align-items: baseline;
}
ol li > * {
  flex: 1 1 33%;
}
.left {
  justify-content: flex-end;
  order: 1;
}
.center {
  flex: 0 1 auto;
  order: 2;
  width: 60px;
}
.right {
  order: 3;
  text-align: left;
}
.book, .center {
  font-family: 'Source Code Pro';
  font-size: 14px;
}
@media (max-width: 767px) {
  .book, .chapter {
    display: block;
  }
  .left {
    text-align: right;
  }
}
@media (min-width: 768px) {
  .row-content {
    display: flex;
    align-items: baseline;
  }
  .left .chapter {
    order: 1;
  }
  .left .book {
    order: 2;
  }
  .right .chapter {
    order: 2;
  }
  .right .book {
    order: 1;
  }
}
.highlight {
  background-color: lightgray;
}
</style>