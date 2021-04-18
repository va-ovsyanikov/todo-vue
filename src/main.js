import Vue from 'vue'
import { Button, Input, Icon } from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import App from './App.vue'

Vue.use(Button);
Vue.use(Input);
Vue.use(Icon);

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
