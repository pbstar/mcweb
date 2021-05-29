import Vue from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios'
import {
  Button,
  Menu,
  MenuItem,
  Select,
  Submenu,
  Input,
  Option,
  Carousel,
  CarouselItem,
  Breadcrumb,
  BreadcrumbItem,
  Pagination,
  Backtop,
  Col,
  Row
} from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css'
// Vue.config.productionTip = false
Vue
  .use(Button)
  .use(Select)
  .use(Menu)
  .use(MenuItem)
  .use(Submenu)
  .use(Input)
  .use(Option)
  .use(Carousel)
  .use(CarouselItem)
  .use(Breadcrumb)
  .use(BreadcrumbItem)
  .use(Pagination)
  .use(Backtop)
  .use(Col)
  .use(Row)
Vue.prototype.$http = axios
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
