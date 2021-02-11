import NuxtConfig from '@sc-voice/scv-static/nuxt.config';
let CONFIG = JSON.parse(JSON.stringify(NuxtConfig));
Object.assign(CONFIG.head, {
    titleTemplate: '%s - static',
    title: 'Dhammaregen/sutta',
    htmlAttrs: {
      lang: 'de'
    },
});

export default CONFIG;
