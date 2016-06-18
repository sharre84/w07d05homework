var
  express = require('express'),
  mongoose = require('mongoose'),
  app = express(),
  bodyParser = require('body-parser'),
  postRoutes = require('./routes/posts.js'),
  userRoutes = require('./routes/users.js')
  PORT = 3000

mongoose.connect('mongodb://localhost/scrumdb', function(err){
  if (err) throw err;
  console.log('connected to database!');
})

app.use(bodyParser.json())
app.use('/posts', postRoutes)
app.use('/users', userRoutes)

app.get('/', function(req, res) {
  res.json({message: 'Welcome to the site!'})
})



app.listen(PORT, function(err){
  if (err) throw err;
  console.log("Server running on port:", PORT)
})
