import Vue from 'vue'
import Router from 'vue-router'
import Home from '../views/home/Home'
import City from '../views/city/City'
import HomeLikeDetail from '../views/homelikedetail/HomeLikeDetail'
import WeekendDetail from '../views/weekenddetail/WeekendDetail'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path:'/',
      component:Home
    },
    {
      path:'/city',
      component:City
    },
    {
      path:'/detail/:id',
      name:'detaillink',
      component:HomeLikeDetail
    },
    {
      path:'/weekend/:id',
      name:'weekendlink',
      component:WeekendDetail
    }
  ]
})
