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
                <item 
                    v-for="(item, i) in posts"
                    :key = "i"
                    :post="item"
                />
            </div>
            <div v-else>
                <label>Username  </label>
                <input type="text" v-model="username"/>
            </div>
            <button @click = "open = !open"> {{ label }} </button>
        </div>
    `   
    
})

app.component("item", {
    props: ["post"],
    template: `
    <div class="item">
        <div class="title">{{ post.title }}</div>
        <p>{{ post.description }}</p>
    </div>
    `
});


const vm =app.mount("#app");