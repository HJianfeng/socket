import request from './index';

export function getHello(params) {
  return request({
    url: '/api/hello',
    method: 'get',
    params,
  });
}

export function getChat(params) {
  return request({
    url: '/api/chat',
    method: 'get',
    params,
  });
}
