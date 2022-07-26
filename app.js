const express = require("express");
const app = express();
const mongoose = require('mongoose');
const db = require('./config/keys').mongoURI;
const users = require('./routes/api/users')
const posts = require('./routes/api/posts')
const User = require('./models/User')
const bodyParser = require('body-parser');
const passport = require('passport');


mongoose
.connect(db, { useNewUrlParser: true })
.then(() => console.log("Connected to MongoDB successfully"))
.catch(err => console.log(err));

app.use(bodyParser.urlencoded({
  extended: false
}));

app.use(bodyParser.json());

app.get("/", (req, res) => { res.send("Hello World you sullen scallywag"); })


app.use(passport.initialize()); // per reading
  require('./config/passport')(passport);

  


app.use("/api/users", users);
app.use("/api/posts", posts);


const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server is running on  ${port}`));
