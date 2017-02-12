import 'element-ui/lib/theme-default/index.css'

import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui'

Vue.use(ElementUI);

var EventBus = new Vue();
Object.defineProperties(Vue.prototype, {
    $eventBus: {
        get: function () {
            return EventBus;
        }
    }
});

new Vue({
  el: '#app',
  render: h => h(App)
})
