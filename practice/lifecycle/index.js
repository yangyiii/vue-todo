import Vue from 'vue';

const app = new Vue({
    el: '#root',
    // template: '<div>{{text}}</div>',
    data: {
        text: 0
    },
    beforeCreate(){
        console.log(this.$el,'beforeVreate');
    },
    created(){
        console.log(this.$el,'created')
    },
    beforeMount(){
        console.log(this.$el,'beforeMount');
    },
    mounted(){
        //做有关dom操作
        console.log(this.$el,'mounted')
    },
    beforeUpdate(){
        console.log('beforeUpdate');
    },
    updated(){
        console.log('updated')
    },
    activated(){
        console.log('activated')
    },
    deactivated(){
        console.log('deactivated')
    },
    beforeDestroy(){
        console.log('beforeDestory');
    },
    destroyed(){
        console.log('destoryed');
    },
    render(h){
        // throw new TypeError('render error');
        return h('div', {}, this.text)
    },
    renderError(h, err){
        return h('div', {}, err.stack);
    }
})
// setInterval(() => {
//     app.text+=1
// }, 1000)

setTimeout(()=> {
    app.$destroy()
})