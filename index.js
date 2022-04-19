const app = Vue.createApp({
    data(){
        return{
            img: "https://yt3.ggpht.com/ytc/AKedOLQMSrgxItPwy1gW4nke8tyEXNImWjwt3upFTg7g=s900-c-k-c0x00ffffff-no-rj"
        }
    },
    template: `<img v-bind:src="img" v-bind:alt="img">`
}).mount("#app");