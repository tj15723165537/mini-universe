// pages/chat/chat.ts
import {chat} from "../../api/common/index";

Page({
    /**
     * 页面的初始数据
     */
    data: {
        question: '',
        answer:''
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