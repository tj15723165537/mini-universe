// pages/chat/chat.ts
import {chat} from "../../api/common/index";

Page({
    /**
     * 页面的初始数据
     */
    data: {
        question: '',
        answer:'If you want to use a custom server, please make sure that it is secure and trusted. Otherwise, your API Key and conversation information may be leaked.'
    },
    onChange(event) {
        this.setData({
            question: event.detail
        });
    },
    send(){
        chat(this.data.question).then((res) => {
            console.log(res.data);
            this.setData({
                answer: res.data.answer
            })
        });
    }
})