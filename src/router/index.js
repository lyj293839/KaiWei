import Vue from 'vue'
import Router from 'vue-router'

import index from '@/components/index'
import personal from './personal'

const originalPush = Router.prototype.push
Router.prototype.push = function push (location, onResolve, onReject) {
  if (onResolve || onReject){
    return originalPush.call(this, location, onResolve, onReject)
  }
  return originalPush.call(this, location).catch(err => err)
}

Vue.use(Router)

const router=new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: index,
      redirect: 'home',
      children:[
        {
          path: '/home',
          name: 'home',
          component: () => import('../components/home')
        },
        {
          path: '/search',
          name: 'search',
          component: () => import('../components/search'),
          meta:{
            title:'搜索'
          }
        },
        {
          path: '/Menu',
          name: 'Menu',
          component: () => import('../components/prod/menu'),
          meta:{
            title:'全部商品'
          }
        },
        {
          path: '/prod_detail',
          name: 'prod_detail',
          component: () => import('../components/prod/prod_detail'),
        },
        {
          path: '/inquiry',
          name: 'inquiry',
          component: () => import('../components/prod/inquiry'),
          meta:{
            isLogin:true,
            title:'询价'
          }
        },
        {
          path: '/understand',
          name: 'understand',
          component: () => import('../components/about/understand'),
          meta:{
            title:'关于我们'
          }
        },
        {
          path: '/recruit',
          name: 'recruit',
          component: () => import('../components/about/recruit'),
          meta:{
            title:'人才招聘'
          }
        },
        {
          path: '/contact',
          name: 'contact',
          component: () => import('../components/contact'),
          meta:{
            title:'联系我们'
          }
        },
        {
          path: '/news',
          name: 'news',
          component: () => import('../components/new/news'),
          meta:{
            title:'资讯'
          }
        },
        {
          path: '/news_detail',
          name: 'news_detail',
          component: () => import('../components/new/news_detail'),
          meta:{
            title:'资讯详情'
          }
        },
        {
          path: '/market',
          name: 'market',
          component: () => import('../components/market/market'),
          meta:{
            title:'积分商品'
          }
        },
        {
          path: '/goods_detail',
          name: 'goods_detail',
          component: () => import('../components/market/goods_detail'),
          meta:{
            isLogin:true
          }
        },
        {
          path: '/shopping',
          name: 'shopping',
          component: () => import('../components/shopping'),
          meta:{
            footHiddle:true,
            isLogin:true,
            title:'购物车'
          }
        },
        {
          path: '/order',
          name: 'order',
          component: () => import('../components/order/index'),
          meta:{
            footHiddle:true,
            isLogin:true,
            title:'订单'
          }
        },
        {
          path: '/generate_order',
          name: 'generate_order',
          component: () => import('../components/order/generate_order'),
          meta:{
            footHiddle:true,
            isLogin:true,
            title:'订单支付'
          }
        },
        {
          path: '/amount_order',
          name: 'amount_order',
          component: () => import('../components/order/amount_order'),
          meta:{
            footHiddle:true,
            isLogin:true,
            title:'额度还款'
          }
        },
        {
          path: '/order_pay',
          name: 'order_pay',
          component: () => import('../components/order/index_pay'),
          meta:{
            footHiddle:true,
            isLogin:true,
            title:'订单详情'
          }
        },
        ...personal,
      ]
    }
  ]
})
router.beforeEach((to,from,next)=>{ 
  if(to.meta.isLogin){
    let token = localStorage.getItem('token');
    if(!token){
      if (!from.query.noLogin) {
        let toQuery = from.query?JSON.parse(JSON.stringify(from.query)):{}
        toQuery.noLogin = true
        next({
          path: from.path,
          query: toQuery
        })
      } else {
        next({path: from,})
      }
    }else{
      next()
    }
  }else{
    next()
  }
})
export default router;
