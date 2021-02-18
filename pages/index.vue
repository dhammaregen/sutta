<template>
  <v-sheet light class="content" >
    <div class="content-nav">
      <v-btn icon class="scv-icon-btn"
        @click="clickHome()">
        <home-icon class="scv-settings-icon"/>
      </v-btn>
      <scv-settings monolingual="de" :version="version" dark :js="js"/>
    </div>
    <div class="content-search">
      <scv-search-field :lang="lang" :js="js"
        v-on:search-text="search"
      />
      <scv-results :lang="lang" :js="js"/>
    </div>
    <scv-sutta :js="js" />
  </v-sheet>
</template>

<script>
import Vue from 'vue';
import HomeIcon from 'vue-material-design-icons/Home.vue'; 
console.log(`homeicon`, HomeIcon);
import { 
  ScvVue,
  ScvSrc,
} from "@sc-voice/scv-static";
const {
  ScvSearchField,
  ScvResults,
  ScvSutta,
  ScvSettings,
} = ScvVue;

export default {
  components: {
    HomeIcon,
    ScvSearchField,
    ScvResults,
    ScvSutta,
    ScvSettings,
  },
  data: function(){
    return {
      panels: [0,1],
      lang: 'de',
    };
  },
  mounted() {
  },
  methods:{
    clickHome() {
      console.log('clickHome', window.location);
      let { search } = this.$route.query;
      if (search) {
        window.location.href = window.location.href.replace(/\?.*/,'');
      }
    },
    search(value) {
      console.log(`search:`, value);
    },
    githubUrl(path) {
      return `https://github.com/sc-voice/scv-static/blob/main/${path}`;
    },
  },
  computed: {
    version() {
      return require('../package.json').version;
    },
    js() { 
      return ScvSrc;
    },
    langItems() {
      return [
        { text: 'English', value: 'en', },
        { text: 'Deutsch', value: 'de', },
      ];
    },
  },
}
</script>
<style>
.v-application code {
  background-color: #000;
}

.content-search {
  xmax-width: 28rem;
}

.content-nav {
  width: 100%;
  padding: 0.5rem;
  padding-left: 1rem;
  padding-right: 1rem;
  display: flex;
  justify-content: space-between;
  background-color: #fff;
}
@media(width < 600px) {
}

.content {
  display: flex;
  flex-flow: column;
  align-items: center;
  padding-left: 0;
  padding-right: 0;
}


</style>
