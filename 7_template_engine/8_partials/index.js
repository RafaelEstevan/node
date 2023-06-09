const express = require('express')
const exphbs = require('express-handlebars')

const app = express()

const hbs = exphbs.create({
  partialsDir: ["views/partials"]
})

app.engine('handlebars', hbs.engine)
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

app.get('/blog', (req, res)=>{
  const posts = [
    {
      title: 'Aprender Node.js', 
      category: 'JavaScript',
      body: 'Teste',
      comments: 4
    },
    {
      title: 'Aprender Python', 
      category: 'Python',
      body: 'Teste',
      comments: 4
    },
    {
      title: 'Aprender PHP', 
      category: 'PHP',
      body: 'Teste',
      comments: 4
    }
  ]
  res.render('blog', {posts})
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