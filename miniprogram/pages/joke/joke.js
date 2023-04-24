import {getJoke} from "../../api/common/index";

Page({
    data: {
        dataList:[],
        total:10
    },
    onLoad() {
        this.getJokeList()
    },
    getJokeList(){
        const dataList = this.data.dataList
        for (let i = 0; i < this.data.total; i++) {
            getJoke().then(res => {
                dataList.push(res.data[0])
                this.setData({
                    dataList
                })
            })
        }
    },
    /**
     * 页面上拉触底事件的处理函数
     */
    onReachBottom() {
        console.log(111)
    },
})
