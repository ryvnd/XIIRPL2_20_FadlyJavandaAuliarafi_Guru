const express = require('express')
const app = express()
const port = 4000
const connectDB = require ('./config/db')
const gururouter = require('./router/guru')

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.use(gururouter)
connectDB()

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

