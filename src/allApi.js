import request from './request'

export function imgGet(url) {
    return request({
        url: url,
        method: 'post',
        contentType: 'application/json',
        // responseType: 'arraybuffer',
        data: {}
    })
}

export function imgDataMaker(localPath) {
    imgGet(localPath).then(function (response) {
        // 将后台的图片二进制流传华为base64
        return 'data:image/png;base64,' + btoa(
            new Uint8Array(response).reduce((data, byte) => data + String.fromCharCode(byte), '')
        )
    }).then(data => {
        return data
    })
}