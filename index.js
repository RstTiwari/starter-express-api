const express = require('express')
const app = express()
app.all('/signin', (req, res) => {
    console.log("Just got a request!")
    res.send('Yo!')
})
app.all("/signup", (req, res) => {
  console.log("Just got a request!");
  let response = {
    success:1,
    message:"you bro done it"
  }
  res.send(response);
});
app.listen(process.env.PORT || 3000)