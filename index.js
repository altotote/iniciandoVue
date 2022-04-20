const app = Vue.createApp({
    data(){
        return{
            
            text: "Puerta cerrada",
            open: false,
            style: "close"
            

        }
    },
    watch: {
        open(value){ 
            if(value){
                this.text = "La puerta esta abierta";
                this.style = "open";
            }
            else{
                this.text = "La puerta esta cerrada"; 
                this.style = "close";

            }
        }
    },
    computed: { 
        label(){
            return this.open ? "Cerrar" : "Abrir";
        }
    },
    template: `
        <div class = "container" :class="[style]">
            <h2> {{ text }}</h2>
            <div v-if="open">
                <p>Bienvenido, {{ username }}</p>
            </div>
            <div v-else>
                <label>Username  </label>
                <input type="text" v-model="username"/>
            </div>
            <button @click = "open = !open"> {{ label }} </button>
        </div>
    `   
    
}).mount("#app");