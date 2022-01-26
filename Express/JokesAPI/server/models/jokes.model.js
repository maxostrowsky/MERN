const mongoose = require("mongoose");

const JokesSchema = new mongoose.Schema({
	name: String,
	age: Number
});

const Jokes = mongoose.model("Jokes", JokesSchema);

module.exports = Jokes;