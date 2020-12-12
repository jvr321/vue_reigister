import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
Vue.use(Vuex)

export default new Vuex.Store({
    state:{
        loginName:localStorage.getItem('loginName'),
        userList:JSON.parse(localStorage.getItem('userlist')) || []
    },
    mutations:{//放同步修改state数据的方法
        saveLoginName(state, loginName){
            localStorage.setItem('loginName', loginName)
            state.loginName = loginName
        },
        saveUserList(state, userList){
            state.userList = userList
            localStorage.setItem('userlist', JSON.stringify(userList))
        }
    },
    actions:{//放异步修改state数据的方法
        getUserList(store){
           //请求数据
           return new Promise((resolve, reject)=>{
                axios.get('/api/userlist').then(resUserList=>{
                    store.commit('saveUserList',resUserList.data)
                    resolve()
                })
           })
        }
    },
    getters:{
        olderUser(state){
            console.log('olderUser')
            return state.userList.filter(user=>user.age>=25)
        },
        youngUser(state){
            console.log('yothUser')
            return state.userList.filter(user=>user.age<25)
        }
    }
})
