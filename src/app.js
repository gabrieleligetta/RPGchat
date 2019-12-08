const hbs = require('hbs')
const path = require('path')
const express = require('express')

const app = express()

// setting dynamic port
const port = process.env.PORT || 3000

// setup handlebars engine and views location
app.set('view engine', 'hbs')
app.set('views', path.join(__dirname, './templates/views'))
hbs.registerPartials(path.join(__dirname, './templates/partials'))

// setup static directory to serve
app.use(express.static(path.join(__dirname, './src/public')))

app.get('/', (req, res) => {
    res.render('home', {
        title: 'Home'
    })
})

app.listen(port, () => {
    console.log('Server is up on port ' + port)
})