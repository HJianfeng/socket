import axios from 'axios';
import { ElMessage } from 'element-plus';

const service = axios.create({
  baseURL: import.meta.env.VITE_BASE_API, // api 的 base_url
  timeout: 50000, // 请求超时时间
  headers: {
    'Content-Type': 'application/json',
  },
  transformRequest: [(data) => JSON.stringify(data)], // 参数转换
});

// axios实例拦截响应
service.interceptors.response.use(
  (response) => {
    if (response.status !== 200) {
      ElMessage.error('网络连接异常,请稍后再试!');
    }
    return response;
  },
  // 请求失败
  (error) => {
    ElMessage.error(error.message);
  },
);

// axios实例拦截请求
service.interceptors.request.use(
  (config) => config,
  (error) => Promise.reject(error),
);

export default service;
