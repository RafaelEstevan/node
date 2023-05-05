const express = require('express')
const exphbs = require('express-handlebars')

const app = express()

app.engine('handlebars', exphbs())
app.set('view engine', 'handlebars')

app.get('/dashboard', (req, res)=>{

  const items = [
    "item A",
    "Item B",
    "Item C"
  ]

  res.render('dashboard', {items})
})

app.get('/post', (req, res)=>{
  const post = {
    title: 'Aprender Node.js', 
    category: 'JavaScript', 
    body: 'Este artigo vai te ajudar a aprender node.js', 
    comments: 4
  }

  res.render('blogpost', {post})
})

app.get('/', function (req, res) {

  const user = {
    name: 'Rafael',
    surname: 'Estevan', 
    age: 28
  }

  const auth = true
  const approved = true

  res.render('home', {user: user, auth, approved})
})

app.listen(3000)