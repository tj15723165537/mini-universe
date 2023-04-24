import {chat} from "../../api/common/index";

Page({
    /**
     * 页面的初始数据
     */
    data: {
        question: '',
        answer: '',
        loading:false,
    },
    onChange(event) {
        this.setData({
            question: event.detail
        });
    },
    send(){
        this.setData({
            loading:true,
            answer: '拼命加载中...'
        })
        chat(this.data.question).then((res) => {
            this.setData({
                answer: res.data.answer,
                loading:false
            })
        });
    }
})