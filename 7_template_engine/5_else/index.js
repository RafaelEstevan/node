const express = require('express')
const exphbs = require('express-handlebars')

const app = express()

app.engine('handlebars', exphbs())
app.set('view engine', 'handlebars')

app.get('/dashboard', (req, res)=>{
  res.render('dashboard')
})

app.get('/', function (req, res) {

  const user = {
    name: 'Rafael',
    surname: 'Estevan', 
    age: 28
  }

  const auth = false
  const approved = true

  res.render('home', {user: user, auth, approved})
})

app.listen(3000)