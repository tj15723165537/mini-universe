import request from '../../utils/request'

export const getJoke = () => {
  return request({
    url: 'https://api.vvhan.com/api/joke',
    data: {}
  })
}

export const getSaying = () => {
  return request({
    // url: 'https://api.xygeng.cn/one',
    url: 'https://api.oick.cn/dutang/api.php',
    data: {}
  })
}