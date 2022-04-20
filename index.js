const app = Vue.createApp({
    data(){
        return{
            
            text: "Hola Vue"
        }
    },
    template: `
        <p> {{ text }}</p>
        <input type="text" v-model="text">

    `
    
}).mount("#app");