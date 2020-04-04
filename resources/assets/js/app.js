require('./bootstrap')

window.Vue = require('vue');

import LocationMap from './components/Map';
const app = new Vue({
    el: '#app',
    components: {
        LocationMap
    }
});
