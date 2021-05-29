import Vue from 'vue'
import VueRouter from 'vue-router'
import Search from '../views/Search.vue'

Vue.use(VueRouter)
const mode = 'history'
const routes = [
  {
    path: '/',
    name: 'Search',
    component: Search
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('../views/About.vue')
  },
  {
    path: '/blog',
    name: 'Blog',
    component: () => import('../views/Blog.vue'),
    children: [
      {
        path: 'list/:list',
        name: 'Bloglist',
        component: () => import('../components/Blog/Bloglist.vue')
      },
      {
        path: 'detail/:id',
        name: 'Blogdetail',
        component: () => import('../components/Blog/Blogdetail.vue')
      }
    ]
  },
  {
    path: '/pbui',
    name: 'Pbui',
    component: () => import('../views/Pbui.vue')
  },
  {
    path: '/pbuiwx',
    name: 'Pbuiwx',
    component: () => import('../views/Pbuiwx.vue')
  },
  {
    path: '/pbuivue',
    name: 'Pbuivue',
    component: () => import('../views/Pbuivue.vue')
  }
]
const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push (location) {
  return originalPush.call(this, location).catch(err => err)
}
const router = new VueRouter({
  mode, routes
})
router.beforeEach((to, from, next) => {
  if (to.matched.length === 0) {
    from.name ? next({ name: from.name }) : next('/');
  } else {
    next();
  }
});
export default router
