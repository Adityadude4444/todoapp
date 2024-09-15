const mongoose = require("mongoose");

mongoose.connect(
  "mongodb+srv://admin:GlG3T******k***2V@cluster0.qo48i.mongodb.net/401"
);

const Schema = mongoose.Schema;

const userSchema = new Schema({
  username: String,
  email: String,
  password: String,
  todos: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "todo",
    },
  ],
});

module.exports = mongoose.model("user", userSchema);
