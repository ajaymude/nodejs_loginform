const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const homeRouter = require('./router/homeRouter')

const port = process.env.port || 3000;

const app = express()

mongoose.set('strictQuery', true)
mongoose.connect('mongodb://127.0.0.1:27017/login')
.then(()=>{ console.log('connected with db')})
.catch(()=>{ console.log(' not connected with db')})

app.set('view engine', 'ejs')
app.use(express.static('public'))

app.use(bodyParser.urlencoded({ extended:false}))
app.use(bodyParser.json())

app.use ('/', homeRouter)
app.listen(port,()=>{ console.log(  ' server is runnig ')})