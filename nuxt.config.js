import NuxtConfig from '@sc-voice/scv-static/nuxt.config';
let CONFIG = JSON.parse(JSON.stringify(NuxtConfig));
var { name } = require('./package.json');
var appName = name.split('/').filter(n=>n.length).pop();
var babelCompact;
let BABEL_ENV = process.env.BABEL_ENV;
let routerBase = BABEL_ENV === 'deploy' 
    ? `/${appName}/`
    : '/';
babelCompact = BABEL_ENV === 'deploy' ? true : false;

CONFIG.router.base = routerBase;
CONFIG.vuetify.theme.dark = false;
Object.assign(CONFIG.head, {
    titleTemplate: '%s - static',
    title: 'Dhammaregen/sutta',
    htmlAttrs: {
      lang: 'de'
    },
});

//console.log(`Dhammaregen nuxt.config.js`, JSON.stringify(CONFIG, null, 2));

export default CONFIG;
