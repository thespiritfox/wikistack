const express = require('express')
const morgan = require('morgan')
const app = express()


app.use(morgan('dev'))
// app.use(express.static())
app.use(express.urlencoded({extended: false}))
app.get('/', function(req, res){
    console.log('Hello World')
})


const PORT = 3000
app.listen(PORT, function(){ 
    console.log('hi')
})