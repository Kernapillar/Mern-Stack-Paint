const express = require("express");
const app = express();
const mongoose = require('mongoose');
const db = require('./config/keys').mongoURI;
const users = require('./routes/api/users')
const comments = require('./routes/api/comments')
const User = require('./models/User')
const bodyParser = require('body-parser')


mongoose
  .connect(db, { useNewUrlParser: true })
  .then(() => console.log("Connected to MongoDB successfully"))
  .catch(err => console.log(err));

  app.use(bodyParser.urlencoded({
    extended: false
  }));

  app.use(bodyParser.json());

app.get("/", (req, res) => {
const user = new User({
  handle: "user1",
  email: "user@email.com",
  password: "123456"
})
user.save()
res.send("Hello World you sullen scallywag");
});

app.use("/api/users", users);
app.use("/api/comments", comments);


const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server is running on  ${port}`));
