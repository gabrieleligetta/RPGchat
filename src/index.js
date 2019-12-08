const express = require('express')
const app = express()
 
app.get('/', (req, res) => {
    const name = "World"
    res.send(`Henlo, ${name}!`)
})
 
app.listen(3000)
console.log('Listening on port 3000...')