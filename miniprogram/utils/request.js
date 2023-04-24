
export const request = ({url, method, data}) => {
  return new Promise((resolve, reject) => {
    wx.request({
      url,
      method: method || 'GET',
      data,
      success(res) {
        resolve(res)
      },
      fail(err) {
        reject(err)
      }
    })
  })
}

export default request