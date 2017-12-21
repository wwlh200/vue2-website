/* eslint-disable standard/object-curly-even-spacing,no-labels */
import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

let router = new Router({
  routes: [
    {
      path: '/frame',
      name: 'frame',
      component(resolve) {
        require(['../pages/Frame.vue'], resolve)
      },
      children: [
        {
          path: 'HomePages', component(resolve) {
          require(['../pages/HomePages.vue'], resolve)
        }
        },
        {
          path: 'Help', component(resolve) {
          require(['../pages/Help.vue'], resolve)
        }
        }
      ]
    },
    {path: '*', redirect: {name: 'frame'}}
  ],
  mode: 'history',
  scrollBehavior(to, from, savedPosition) {
    if (to.hash) {
      return {
        // 这个是透过 to.hash 的值來找到对应的元素
        // 照你的 html 來看是不用多加处理这样就可以了
        // 例如你按下 #3 的连接，就会变成 querySelector('#3')，自然会找到 id = 3 的元素
        selector: to.hash
      }
    }
  }
})

export default router
