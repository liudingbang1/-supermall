import axios from "axios";


/*网络请求js*/


export function request(config) {
  //  1、创建axios的实例
  const instance = axios.create({
    baseURL: 'http://152.136.185.210:7878/api/m5',
    timeout: 5000
  })
  //2、axios的拦截器
  //拦截请求
  instance.interceptors.request.use(config => {
    return config;
  }, err => {
    console.log(err);
  });
  //拦截响应
  instance.interceptors.response.use(res => {
    return res.data;
  }, err => {
    console.log(err);
  })
  //3、发送真正的网络请求
  return instance(config);
}
