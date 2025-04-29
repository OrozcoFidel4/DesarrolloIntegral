/* Codigo solamente para pruebas */

var express = require("express");
var mongoose = require("mongoose");

const Animal = mongoose.model('Animal', new mongoose.Schema({
    tipo: String,
    estado: String
}))

const app = express()

//mongoose.connect('mongodb://root:password@localhost:27017/miapp?authSource=admin')
/* monguito es el nombre del contenedor de docker */
mongoose.connect('mongodb://root:password@monguito:27017/miapp?authSource=admin') 

app.get('/', async (_req, res) => {
    console.log('Listando animales...')
    const animales = await Animal.find()
    return res.send(animales)
})

app.get('/crear', async (_req, res) => {
    console.log('Creando un animal nuevo...')
    await Animal.create({tipo: 'animalito', estado: 'feliz'})
    return res.send('ok')
})

app.listen(3000, () => console.log('listening...'))
