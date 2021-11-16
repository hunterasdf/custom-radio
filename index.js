const express = require('express')
const app = express()
const PORT = process.env.PORT || 5000

app.get('/', (req, res) => {
  res.render(pages/main)
})

app.listen(PORT, () => {
  console.log(`Listening at ${PORT}`)
})