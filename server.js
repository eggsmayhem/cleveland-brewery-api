const express = require('express')
const cors = require('cors')
const app = express()
// const mongoose = require('mongoose')
const logger = require('morgan')
const connectDB = require('./config/database')
const breweryRoutes = require('./routes/breweries')


require('dotenv').config({path: './config/.env'})
connectDB()

app.use(express.json())
app.use(express.urlencoded({extended:true})) 
app.use(logger('dev'))
app.use(cors())
app.use('/breweries', breweryRoutes)

app.listen(process.env.PORT || 3001, ()=>{
    console.log('Server is running, you better catch it!')
})   