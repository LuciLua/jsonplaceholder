
const cors = require('cors')
const express = require('express')
const app = express()
const axios = require('axios')

// https://jsonplaceholder.typicode.com/

app.use(cors())
app.get('/', async (req, res) => {

    try {
        // response é a resposta do axios, mas tiro o data de dentro do response
        const { data } = await axios('https://jsonplaceholder.typicode.com/comments')
        // const { data } = await axios('http://localhost:5500/backend.json')
        return res.json(data)

    } catch (error) {
        console.error(error + 'ERROOOOOOOOOOOOO')
    }

})

app.listen('1234')
