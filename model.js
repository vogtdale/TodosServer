const mongoose = require("mongoose")
const {Schema} = mongoose

const todosSchema = new Schema({
    text: {type: String, required: true}
})

const Todos = mongoose.model("Todos", todosSchema)

exports.Todos = Todos