const app = Vue.createApp({
//  template : `
//  <h1> Hola mundo</h1>
//  <p>Desde app.js</p>
 
//  `
data() {
    return {
        quote: "Aqui van las frases",
        author: "Nombre del autor"
    }
},
methods: {
 changeQuote(){
    console.log("Has cambiado el nombre del botón")
 }
    
},

})


app.mount("#myApp")