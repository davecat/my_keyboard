/**
 * Created by dave on 18/1/19.
 */
var app = new Vue({
    el: '#container',
    data: {
        number: ''
    },
    created: function () {
        this.init()
    },
    methods: {
        init: function () {
            var that = this;
            setTimeout(function () {
                that.showKeyBoard()
            },500);
        },
        close: function () {
            $('.my_keyboard_hidden').css('bottom','-100%')
        },
        showKeyBoard: function () {
            $('.my_keyboard_hidden').css('bottom','0')
        },
        numberClick: function (e) {
            this.number+=e.currentTarget.innerHTML;
            e.currentTarget.style.backgroundColor = '#e6e6e6';
            if(e.currentTarget.innerHTML === '删除') {
                console.log(this.number);
                if(this.number === '删除'){
                    this.number = '';
                    return;
                }
                $('li')[this.number.length-3].innerText = '';
                this.number = this.number.substring(0,this.number.length - 3)

            } else {
                $('li')[this.number.length-1].innerText = '*';
                //当输入6位以后关闭键盘
                console.log(this.number.length);

                if(this.number.length === 6) {
                    this.close();
                    weui.loading('支付中...');
                    //make something
                }
            }
        },
        styleEnd: function (e) {
            e.currentTarget.style.backgroundColor = '';
        }
    }
});
