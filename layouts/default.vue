<template>
  <v-app light>
    <v-main>
      <v-container>
        <nuxt />
      </v-container>
    </v-main>
    <v-footer
      :absolute="!fixed"
      app
    >
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

export default {
  components: {
    Logo,
    HomeIcon,
    MenuIcon,
    MonitorIcon,
  },
  data () {
    return {
      clipped: false,
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
  },
}
</script>
<style>
</style>
