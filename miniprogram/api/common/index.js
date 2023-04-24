import request from '../../utils/request'

export const getJoke = () => {
  return request({
    // url: 'https://api.vvhan.com/api/joke',
    url: 'https://v.api.aa1.cn/api/api-wenan-gaoxiao/index.php?aa1=json',
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

export const chat = (msg) => {
  return request({
    url: 'https://hub.onmicrosoft.cn/chat',
    data: {
      q:msg
    }
  })
}

export const getReply = () => {
  return request({
    url: 'https://v.api.aa1.cn/api/api-wenan-shenhuifu/index.php?aa1=json',
    data: {
    }
  })
}

export const getHotReview = () => {
  return request({
    url: 'https://v.api.aa1.cn/api/api-wenan-wangyiyunreping/index.php?aa1=json',
    data: {
    }
  })
}
