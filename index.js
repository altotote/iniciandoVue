const app = Vue.createApp({
    data(){
        return{
            
            nombre: "Hector",
            apellido: "del Reguero",
            now: new Date()

        }
    },
    computed: {
        fullName(){
            return this.nombre + " " + this.apellido
        },
        today(){
            return this.now.toLocaleDateString();
        }
    },
    template: `
        <p> {{ fullName }}</p>
        <p> {{ today }}</p>
    `
    
}).mount("#app");