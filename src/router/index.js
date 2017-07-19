import Vue from 'vue'
import Router from 'vue-router'
import Indexh from '@/components/index/Indexh.vue'
import Yuanquan from '@/components/yuanquan/Yuanquan.vue'
import Zhuxingtu from '@/components/zhuxingtu/Zhuxingtu.vue'
import Quxianmianji from '@/components/quxianmianji/Quxianmianji.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'default',
      redirect: '/indexh'
    }, {
      path: '/indexh',
      name: 'indexh',
      redirect: '/indexh/zhuxingtu',
      component: Indexh,
      children: [{
        path: 'yuanquan',
        component: Yuanquan
      }, {
        path: 'zhuxingtu',
        component: Zhuxingtu
      }, {
        path: 'quxianmianji',
        component: Quxianmianji
      }]
    }
  ]
})
