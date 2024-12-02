const express = require('express')
const app = express()
const port = 3000
const apiRoute = require('./routes/index')
const bodyParser = require('body-parser')
app.use(bodyParser.json({ limit: '1MB' }))
const { dbConnection } = require('./models/index')
dbConnection()


app.use('/api', apiRoute)
app.listen(port, () => {
    console.log('server listening in port:', port)
})