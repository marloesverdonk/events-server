const express = require('express')
const db = require('./db')
const Event = require('./event/model')
const eventRouter = require('./event/router')
const bodyParser = require('body-parser')
const cors = require('cors')

const port = 4000

const app = express()

const corsMiddleware = cors()
app.use(corsMiddleware)

const parserMiddleware = bodyParser.json()
app.use(parserMiddleware)

app.use(eventRouter)



app.listen(port, () => console.log(`listening on port ${port}`))