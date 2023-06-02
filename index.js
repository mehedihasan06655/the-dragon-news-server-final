const express = require('express')
const app = express()
const port = process.env.port || 5000;
const cors = require('cors')

app.use(cors())

const categories = require('./data/categories.json')

app.get('/', (req, res) =>{
    console.log(categories)
    res.send('Dragon is running')
});

app.get('/categories', (req, res) =>{
    res.send(categories)
})

app.listen(port, ()=>{
    console.log(`Dragon API is running on port : ${port}`)
})

