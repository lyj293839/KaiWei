import axios from 'axios';
import qs from 'qs';
import ElementUI from 'element-ui'
import router from '../router'
import store from '@/store'
import { sign} from '@/common/js/crypto';

axios.defaults.timeout = 5000;
axios.defaults.baseURL =process.env.API_BASEURL;

//http request 拦截器
axios.interceptors.request.use(
  config => {
    // const token = getCookie('名称');注意使用的时候需要引入cookie方法，推荐js-cookie
    // config.data = JSON.stringify(config.data);
    config.data = qs.stringify(config.data)
    let timestamp = new Date().valueOf();
    let signstr = sign("",timestamp);
    // 这里需要注意，必须return config才能生效
    // return config
    config.headers = {
      'Content-Type':'application/x-www-form-urlencoded;charset=UTF-8',
      time:timestamp,
      sign:signstr
    }
    if(localStorage.getItem('token')){
      config.headers.Authorization = localStorage.getItem('token');
      config.headers.userToken = localStorage.getItem('token');
    }
    // if(token){
    //   config.params = {'token':token}
    // }
    return config;
  },
  error => {
    return Promise.reject(err);
  }
);


//http response 拦截器
axios.interceptors.response.use(
  response => {
    if(response.data.code ==402){
      // localStorage.removeItem('token');
      // localStorage.removeItem('User');
      // localStorage.removeItem('toRouter');
      // localStorage.removeItem('shopNum');
      // localStorage.removeItem('memberInfo');
      // localStorage.removeItem('newData')
      // localStorage.removeItem('historyProd')
      // localStorage.removeItem('generate_order')
      // localStorage.removeItem('shopping_play')
      // localStorage.removeItem('shop_payList')
      store.commit('logout')
      location.reload()
      router.push({
        path:"/",
      }) 
      ElementUI.Message.error('请登录');
    }
    return response;
  },
  error => {
    return Promise.reject(error)
  }
)


/**
 * 封装get方法
 * @param url
 * @param data
 * @returns {Promise}
 */

export function get(url,params={}){
  return new Promise((resolve,reject) => {
    axios.get(url,{
      params:params
    })
    .then(response => {
      resolve(response.data);
    })
    .catch(err => {
      reject(err)
    })
  })
}


/**
 * 封装post请求
 * @param url
 * @param data
 * @returns {Promise}
 */

 export function post(url,data = {}){
   return new Promise((resolve,reject) => {
     axios.post(url,data)
          .then(response => {
            resolve(response.data);
          },err => {
            reject(err)
          })
   })
 }

 /**
 * 封装patch请求
 * @param url
 * @param data
 * @returns {Promise}
 */

export function patch(url,data = {}){
  return new Promise((resolve,reject) => {
    axios.patch(url,data)
         .then(response => {
           resolve(response.data);
         },err => {
           reject(err)
         })
  })
}

 /**
 * 封装put请求
 * @param url
 * @param data
 * @returns {Promise}
 */

export function put(url,data = {}){
  return new Promise((resolve,reject) => {
    axios.put(url,data)
         .then(response => {
           resolve(response.data);
         },err => {
           reject(err)
         })
  })
}

 /**
 * 封装delete请求
 * @param url
 * @param data
 * @returns {Promise}
 */

export function del(url, data = {}){
  return new Promise((resolve,reject) => {
    axios.delete(url,data)
         .then(response => {
           resolve(response.data);
         },err => {
           reject(err)
         })
  })
}