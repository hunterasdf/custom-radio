const express = require('express')
const app = express()
const PORT = process.env.PORT || 5000

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  res.render('home')
})

app.listen(PORT, () => {
  console.log(`Listening at ${PORT}`)
})