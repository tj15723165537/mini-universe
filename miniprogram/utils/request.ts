interface IrequestOption {
  url: string,
  method?: 'POST' | 'GET',
  data: object
}

type Trequest<T>= (options: IrequestOption) => Promise<T>

export const request: Trequest<any> = ({url, method, data}) => {
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