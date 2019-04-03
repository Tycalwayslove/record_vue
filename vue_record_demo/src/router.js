import Vue from 'vue';
import Router from 'vue-router';
import Index from './views/index.vue';

Vue.use(Router)
const NumberGrowWrap = resolve =>
  require(['@/page/demo/NumberGrowWrap/NumberGrowWrap'], resolve)
export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'index',
      component: Index
    },
    {
      path: '/demo',
      name: 'Demo',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import(/* webpackChunkName: "about" */ './page/demo/index.vue')
    },
    {
      path: '/numbergrowwrap',
      name: 'NumberGrowWrap',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import(/* webpackChunkName: "about" */ './page/demo/NumberGrowWrap/NumberGrowWrap.vue')
    }
  ]
})
