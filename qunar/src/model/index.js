//负责向后台请求数据接口
import axios from 'axios'

// 添加响应拦截器
axios.interceptors.response.use(function (response) {
    // 对响应数据做点什么
    return response.data;
  }, function (error) {
    // 对响应错误做点什么
    return Promise.reject(error);
  });

//请求Home组件的数据接口
export const getHome = ()=>{
    return axios.get('/static/mock/index.json')
}

//请求City组件的数据接口
export const getCity = ()=>{
  return axios.get('/static/mock/city.json')
}

//请求(首页HomeLike的详情)数据接口
export const getHomeLinkDetail = (id)=>{
  return axios.get('/static/mock/homelikedetail/'+id+'.json')
}

//请求(首页HomeWeekend的详情)数据接口
export const getHomeWeekendDetail = (id)=>{
  return axios.get('/static/mock/weekenddetail/'+id+'.json')
}