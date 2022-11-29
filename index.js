const express = require ('express');
const app = express();
const ejs = require('ejs');  

//NODE JS/Express setup 

app.use(express.static('views'))
app.use(express.static('public'))

app.use (express.urlencoded());

// ROUTES

const homeRouter = require('./routes/home')
const gameRouter = require ('./routes/game')
const custRouter = require ('./routes/customer')

app.use('/', homeRouter )
app.use('/game', gameRouter)  
app.use('/customer',custRouter)

app.listen(5000)


