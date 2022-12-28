const app = Vue.createApp({
//  template : `
//  <h1> Hola mundo</h1>
//  <p>Desde app.js</p>
 
//  `
data() {
    return {
        quote: "Aqui van las frases",
        author: "Bruce Wayne"
    }
},
methods: {
 changeQuote(event ){
    console.log("Has cambiado el nombre del botón", event)
    this.author = "Maura Rayo"

    this.capitalize()
},
capitalize(){
    this.changeQuote = this.quote.toUpperCase()
}
  
},

})


app.mount("#myApp")