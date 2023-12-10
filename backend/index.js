const express = require('express')
const {insertBikeInfo} = require('./insetBike')
const {getData} = require('./getData')
const bodyParser = require('body-parser')
const cors = require('cors')
const app = express()
const PORT = '3060'
const Router = express.Router()
//**Middleware**
app.use(bodyParser.json())

//**Cros */
app.use(cors({
    origin:"http://localhost:3000"
}))

const inserted = Router.post('/insetData',insertBikeInfo)
app.use('/',inserted)
const gotData = Router.get('/getData',getData)
app.use('/',gotData)
app.listen(PORT, () => {
    console.log('server started')
})