const express = require('express')
const  mongoose = require("mongoose")
const app = express()
let port = 3000
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

const CONNECTION_URL =
  "mongodb://myfac8ry:myfac8ry@ac-z992smf-shard-00-00.fmmrhks.mongodb.net:27017,ac-z992smf-shard-00-01.fmmrhks.mongodb.net:27017,ac-z992smf-shard-00-02.fmmrhks.mongodb.net:27017/?ssl=true&replicaSet=atlas-piyukq-shard-0&authSource=admin&retryWrites=true&w=majority";

mongoose
  .connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() =>
    app.listen(port, () =>
      console.log(`Server Running on Port: http://localhost:${port}`)
    )
  )
  .catch((error) => console.log(`${error} did not connect`));