import Vue from 'vue'
import Router from 'vue-router'
import Login from '../views/Login'
import Admin from '../views/Admin'
import UserList from '../views/UserList'
import YoungUser from '../views/YoungUser'
import OlderUser from '../views/OlderUser'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login
    },
    {
      path: '/admin',
      name: 'Admin',
      component: Admin,
      redirect:'/userlist',
      children:[
        {
          path: '/userlist',
          name: 'UserList',
          component: UserList
        },
        {//年轻用户
          path: '/younguser',
          name: 'YoungUser',
          component: YoungUser
        },
        {//大龄用户
          path: '/olderuser',
          name: 'OlderUser',
          component: OlderUser
        }
      ]
    }
   
  ]
})
