const express = require('express')
const app = express()
 
app.get('/', (req, res) => {
    const name = "World"
    res.send(`Henlo, ${name}!`)
})
 
app.listen(8080)
console.log('Listening on port 8080...')