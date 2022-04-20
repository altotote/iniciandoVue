const app = Vue.createApp({
    data(){
        return{
            
            text: "Puerta cerrada",
            open: false
            

        }
    },
    watch: {
        open(value){ 
            if(value){
                this.text = "La puerta esta abierta";
            }
            else{
                this.text = "La puerta esta cerrada"; 
            }
        }
    },
    computed: { 
        label(){
            return this.open ? "Cerrar" : "Abrir";
        }
    },
    template: `
        <p> {{ text }}</p>
        <button @click = "open = !open"> {{ label }} </button>
    `
    
}).mount("#app");