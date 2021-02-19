<template>
  <v-app light>
    <div class="site-main">
      <div class="site-banner">
        <div class="banner">
          <div>
            <a href="https://voice.suttacentral.net/"
              aria-label="zur voice-webseite"
              target="_blank"
              class='banner-sc-link'>SuttaCentral Voice</a>
          </div>
          <div>
            <a href="https://dhammaregen.github.io/dhammaregen"
              class='banner-title'
              aria-label="dhammaregen-homepage"
              >Dhammaregen</a>
          </div>
          <div class="banner-sutta-link">
            <a href="https://dhammaregen.github.io/sutta"
              aria-label="zu den suttas"
              >Suttas</a>
          </div>
        </div><!-- banner -->
        <div class="banner-content">
          <scv-search-field :lang="lang" :js="js" />
          <scv-results :lang="lang" :js="js"/>
        </div>
      </div><!-- site-banner -->
      <v-container class="site-content">
        <nuxt />
      </v-container>
    </div><!-- site-main -->
    <v-footer :absolute="!fixed" app >
      <span>&copy; {{ new Date().getFullYear() }} v{{version}}</span>
    </v-footer>
  </v-app>
</template>

<script>
import Vue from 'vue';
import Logo from '~/components/logo.vue';
const { version } = require('~/package.json');
import HomeIcon from 'vue-material-design-icons/Home.vue';
import MenuIcon from 'vue-material-design-icons/Menu.vue';
import MonitorIcon from 'vue-material-design-icons/Monitor.vue';
import { 
  ScvVue,
  ScvSrc,
} from "@sc-voice/scv-static";
const {
  ScvSearchField,
  ScvResults,
  ScvSettings,
} = ScvVue;


export default {
  components: {
    Logo,
    HomeIcon,
    MenuIcon,
    MonitorIcon,
    ScvSearchField,
    ScvResults,
    ScvSettings,
  },
  data () {
    return {
      clipped: false,
      lang: 'de',
      drawer: false,
      fixed: false,
      items: [
        { icon: 'home-icon', title: 'Home', to: '/' },
        { icon: 'monitor-icon', title: 'Desktop', to: '/desktop' },
      ],
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: 'scv-static'
    }
  },
  methods: {
    menuClicked() {
      Vue.set(this, "drawer", true);
    },
  },
  computed: {
    version() {
      return version;
    },
    js() { 
      return ScvSrc;
    },
  },
}
</script>
<style>
.banner {
  height: 120px;
  border-top-right-radius: 4px;
  border-bottom-right-radius: 4px;
  background-color: #171717;
  background-image: url('~assets/img/waterfall.png');
  background-repeat: no-repeat;
  background-position: right -20px bottom 0px;
  background-size: 100px;
  width: 320px;
  font-size: 24px;
  font-family: Helvetica, Sans Serif;
  margin-top: 40px;
  line-height: 1em;
  padding: 18px 0px 30px 20px;
}
@media(width < 850px) {
  .banner {
    height: 80px;
    width: 100%;
    border-radius: 0px;
    margin-top: 0px;
    padding: 4px 0px 30px 20px;
  }
}
.container {
  padding: 0px;
}
.banner-sc-link {
  font-family: Helvetica, sans-serif;
  font-size: 12.7px;
  font-style: italic;
  text-decoration: none;
  color: #ce8400;
  line-height: 1.1em;
  margin-top: 0.2em;
}
.v-application a.banner-title {
  font-size: 24px;
  font-weight: 400;
  line-height: 1.1em;
  height: 1.1em;
  color: #FDFDFB;
}
.banner-sutta-link {
  font-size: 12.7px;
  font-weight: 400;
  line-height: 1.1em;
  height: 1.1em;
  margin-top: 0.8em;
  margin-left: 0.1em;
}
@media(width < 850px) {
  .banner-sutta-link {
    margin-top: 0.3em;
  }
}
a {
  text-decoration: none;
}
a:focus,
a:hover {
  text-decoration: underline;
}
.v-application div.banner-sutta-link a {
  color: #fff;
}
.v-application div.banner-sutta-link a:hover {
}
.site-main {
  display: flex;
  flex-flow: row nowrap;
}
@media(width < 850px) {
  .site-main {
    flex-flow: row wrap;
  }
}
@media(width < 1200px) {
  .banner-content {
    display: none;
  }
}
.site-content {
  padding-left: 1rem;
  padding-right: 1rem;
}
@media(width < 850px) {
  padding-left: 0rem;
  padding-right: 0rem;
}
.site-banner {
  display: flex;
  flex-flow: column nowrap;
}
</style>
