const express = require('express')
const app = express()
app.all('/signin', (req, res) => {
    console.log("Just got a request!")
    res.send('Yo!')
})
app.all("/signup", (req, res) => {
  console.log("Just got a request!");
  res.send("Yo buddy!");
});
app.listen(process.env.PORT || 3000)