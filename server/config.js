const mongoose = require("mongoose");
mongoose.Promise = global.Promise;

const url =
  "mongodb+srv://plake492:doLl3ZlD0ZU3uxdK@test-i2ely.mongodb.net/test?retryWrites=true&w=majority";
mongoose.connect(url, { useNewUrlParser: true });
mongoose.connection.once("open", () =>
  console.log(`Connected to mongo at ${url}`)
);
