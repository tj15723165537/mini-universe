import {getReply} from "../../api/common/index";

Page({
    data: {
        dataList:[],
        total:10
    },
    onLoad() {
        this.getReplyList()
    },
    getReplyList(){
        const dataList = this.data.dataList
        for (let i = 0; i < this.data.total; i++) {
            getReply().then(res => {
                dataList.push(res.data[0])
                this.setData({
                    dataList
                })
            })
        }
    },
    onReachBottom() {
        this.getReplyList()
    },
})
