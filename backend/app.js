require('dotenv').config()
const routes = require('./route/userroute')
const express = require('express')
const mongoose = require('mongoose')


// express app
const app = express()
// json 
app.use(express.json());

// routes
app.use(routes)

// database connection
mongoose.connect(process.env.MONGO_DB,{ useNewUrlParser: true, useUnifiedTopology: true })
//

  .then(()  => {app.listen(process.env.PORT,
  () => {
    console.log('Connected to db & listening on port', process.env.PORT)
  }) 

})
  .catch((err) => console.log(err)
  );