<template>
  <div id="app">
    <h1>A Ball of Beasts</h1>
    <ChapterList />

    <a href="https://ballofbeasts.weebly.com/chapters.html">Source</a>
  </div>
</template>

<script>
import ChapterList from './components/ChapterList.vue'

export default {
  name: 'app',
  components: {
    ChapterList
  }
}
</script>

<style>
#app {
  font-family: 'Open Sans', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}
</style>
