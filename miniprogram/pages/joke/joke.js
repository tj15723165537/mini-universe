import {getJoke} from "../../api/common/index";

Page({
    data: {
        dataList:[]
    },
    onLoad() {
        this.getJokeList()
    },
    getJokeList(){
        const dataList = this.data.dataList
        getJoke().then(res => {
            dataList.push(res.data)
            this.setData({
                dataList
            })
        })
    },   
})
