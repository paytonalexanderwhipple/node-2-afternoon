require('dotenv').config()

const express = require('express')
const bodyParser = require('body-parser')
const massive = require('massive')
const controller = require('./product_controller.js')

app = express()

app.use(bodyParser.json())

app.use(express.static(`${__dirname}/../../front-end/build`))

massive(process.env.CONNECTION_STRING)
    .then(dbInstance => {
        app.listen(process.env.PORT, () => {
            console.log(`Your server is listening on port ${process.env.PORT}`)
        })
        app.set('db', dbInstance)
    }).catch(error => {
        console.log(`There has been an error: ${error}`)
    })

app.get('/api/product', controller.getAll)

app.get('/api/product/:id', controller.getOne)

app.put('/api/product/:id/:prop', controller.update)

app.post('/api/product', controller.create)

app.delete('/api/product/:id', controller.delete)