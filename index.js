const app = Vue.createApp({
    data(){
        return{
            
            text: "Puerta cerrada",
            open: false,
            style: "close",
            posts: [{
                title:"Post 1",
                description: "Descripcion del articulo"
            },{
                title:"Post 2",
                description: "Descripcion del articulo"
            },{
                title:"Post 3",
                description: "Descripcion del articulo"
            },{
                title:"Post 4",
                description: "Descripcion del articulo"
            }]
            

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
                <div v-for="item in posts"> 
                    <div class= "title"> {{ item.title }} </div>
                    <p>{{ item.description }}</p>

                </div>
            </div>
            <div v-else>
                <label>Username  </label>
                <input type="text" v-model="username"/>
            </div>
            <button @click = "open = !open"> {{ label }} </button>
        </div>
    `   
    
}).mount("#app");