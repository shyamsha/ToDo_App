//db configuration

const mongoose = require("mongoose");
const CONNECTION_URI =
  process.env.MONGODB_URI ||
  "mongodb+srv://9849084994:9849084994@todoapp.6odv5.mongodb.net/todo?retryWrites=true&w=majority";

mongoose.Promise = global.Promise;
mongoose
  .connect(CONNECTION_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("connected to db");
  })
  .catch((err) => {
    console.log("Error connecting to DB", err);
  });
module.exports = {
  mongoose,
};
