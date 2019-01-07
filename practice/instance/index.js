import Vue from 'vue';

const app = new Vue({
    //el: '#root',
    template: '<div ref="app"> {{text}} {{obj.a}}</div>',
    data(){
        return {
            text: 0,
            obj: {}
        }
    },
    // watch: {
    //     text(newText, oldText){
    //         console.log(`${newText}: ${oldText}`)
    //     }
    // }
})

app.$mount('#root');

let i = 0;
setInterval(() => {
    i++;
    // app.text += 1;
    // app.obj.a = i;
    app.$set(app.obj, 'a', i)
    // app.$forceUpdate();
    // app.$options.data.text = 2;
    // app.$data.text = 2;
}, 1000)

// console.log(app.$data);
// console.log(app.$props);
// console.log(app.$el);
// console.log(app.$options);
// app.$options.render = (h) => {
//     return h('div', {}, 'new render function');
// }
// console.log(app.$root === app);
// console.log(app.$children);
// console.log(app.$slots);
// console.log(app.$scopedSlots);
// console.log(app.$refs);
// console.log(app.$isServer);
// const unwatch = app.$watch('text', (newText, oldText) => {
//     console.log(`${newText}: ${oldText}`)
// })
// setTimeout(() => {
//     unwatch();
// }, 2000)
app.$on('text', (a, b)=> {
    console.log(`text emitted${a}${b}`);
})
app.$emit('text', 1, 2);

