import Vue from 'vue'
new Vue({
    el: '#root',
    template: '<div>{{globalVar}}</div>',
    // template: '<iframe frameborder="0" src="https://v.qq.com/txp/iframe/player.html?vid=i00299gbm4b" allowFullScreen="true"></iframe>',
    data(){
        return {
            isActive: false,
            globalVar: '111'
        }
    }
})