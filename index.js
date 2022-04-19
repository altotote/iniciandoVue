const app = Vue.createApp({
    data(){
        return{
            counter:0,
            evt: "click"
        }
    },
    methods:{
        increment(){
            this.counter++;
        }
    },
    template: `<button v-on:[evt]="increment">{{ counter }}</button>`
}).mount("#app");