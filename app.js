const express = require("express");
const app = express();
const mongoose = require('mongoose');
const db = require('./config/keys').mongoURI;
const users = require('./routes/api/users')
const posts = require('./routes/api/posts')
const User = require('./models/User')
const bodyParser = require('body-parser');
const passport = require('passport');
const path = require('path');


if (process.env.NODE_ENV === 'production') {
  app.use(express.static('frontend/build'));
  app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'frontend', 'build', 'index.html'));
  })
}

mongoose
.connect(db, { useNewUrlParser: true })
.then(() => console.log("Connected to MongoDB successfully"))
.catch(err => console.log(err));

app.use(bodyParser.urlencoded({
  extended: false
}));

app.use(bodyParser.json());


app.get("/", (req, res) => { res.send("Hello World you sullen scallywag"); })

// app.all('/', function (req, res, next) {
//   res.header("Access-Control-Allow-Origin", "*");
//   res.header("Access-Control-Allow-Headers", "X-Requested-With");
//   next();
// });

app.use(passport.initialize()); // per reading
  require('./config/passport')(passport);

  


app.use("/api/users", users);
app.use("/api/posts", posts);


const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server is running on  ${port}`));
