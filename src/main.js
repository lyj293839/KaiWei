// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from '@/store'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import {post,get,patch,put,del} from './api/index';
import All from '@/common/js/All'
// import '@/assets/font/font.css';

Vue.config.productionTip = false
Vue.use(ElementUI)
Vue.prototype.$post=post;
Vue.prototype.$get=get;
Vue.prototype.$patch=patch;
Vue.prototype.$put=put;
Vue.prototype.$del=del;
Vue.prototype.$All = All

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>',
  data: function(){
      return {
          shopping_num: localStorage.getItem('shopNum')?localStorage.getItem('shopNum'):0,
          pageSize:15,
      }
  },
  render: h => h(App)
})
