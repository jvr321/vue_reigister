import axios from 'axios'

//统一规定后台的返回格式
axios.interceptors.response.use(function (response) {
  // Any status code that lie within the range of 2xx cause this function to trigger
  // Do something with response data
  return response.data;
});

//请求Home组件的接口数据
export let getHome = ()=>{
  return axios.get('/static/mock/index.json')
}


//请求City组件的接口数据
export let getCity = ()=>{
  return axios.get('/static/mock/city.json')
}



//请求Detail组件的接口数据
export let getDetail = (id)=>{
  return axios.get('/static/mock/detail/'+id+'.json')
}
