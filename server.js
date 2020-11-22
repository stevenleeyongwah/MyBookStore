if ( process.env.NODE_ENV !== 'production') {
    require('dotenv').config()
}

const express = require('express')
const app = express()
const expressLayouts = require('express-ejs-layouts')
const indexRouter = require('./routes/index')
const mongoose = require('mongoose')

app.set('view engine', 'ejs')
app.set('views', __dirname + '/views')
app.set('layout', 'layouts/layout')
app.use(expressLayouts)
app.use(express.static('public'))
app.use('/', indexRouter)
app.listen(process.env.PORT || 3000)

// Connect to mongodb database
mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true })
        .then(() => console.log("Successfully connected to database"))
        .catch(err => console.log("Error during connecting to database"))

