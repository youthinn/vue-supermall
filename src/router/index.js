import Vue from 'vue'
import Router from 'vue-router'

// 路由懒加载
const Home = () => import('views/home/Home')
const Category = () => import('views/category/Category')
const Cart = () => import('views/cart/Cart')
const Proflie = () => import('views/proflie/Proflie')
const Detail = () => import('views/detail/Detail')
const OrderForm = () => import('views/orderform/OrderForm')
const ChangeOrderForm = () => import('views/orderform/ChangeOrderForm')


// 1.安装插件
Vue.use(Router)

const routes = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    component: Home
  },
  {
    path: '/category',
    component: Category
  },
  {
    path: '/cart',
    component: Cart
  },
  {
    path: '/proflie',
    component: Proflie
  },
  {
    path: '/detail/:iid',
    component: Detail
  },
  {
    path: '/orderform',
    name: 'orderform',
    component: OrderForm
  },
  {
    path: '/changeorder',
    component: ChangeOrderForm
  }
]

// 2.创建router
const router = new Router({
  routes,
  mode: 'history'
})

export default router
