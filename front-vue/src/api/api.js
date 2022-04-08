import request from '@/utils/request'


/**
 * login func
 * parameter: {
 *     username: '',
 *     password: '',
 *     remember_me: true,
 *     captcha: '12345'
 * }
 * @param parameter
 * @returns {*}
 */
export function mkdir (parameter) {
  return request({
    url: "path/mkdir",
    method: 'post',
    data: parameter
  })
}

export function list (parameter) {
  return request({
    url: "file/list",
    method: 'post',
    data: parameter
  })
}

export function fileDelete (parameter) {
  return request({
    url: "file/delete",
    method: 'post',
    data: parameter
  })
}

export function uploadCheck (parameter) {
  return request({
    url: "upload/check",
    method: 'post',
    data: parameter
  })
}

export function uploadFile (parameter) {
  return request({
    url: "upload/upload",
    method: 'post',
    data: parameter
  })
}