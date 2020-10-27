const mongoose = require('mongoose')
const validator = require('validator')

const {
    Schema
} = mongoose
const todoSchema = new Schema({
    title: {
        type: String,
        required: true,
        minlength: 1,
        maxlength: 12
    },
    currentState:{
        type:String,
        required:true,
        default:["open","done"]
    },
    description: {
        type: String,
        required: true,
        minlength: 1,
        maxlength: 256,
    },
    Priority: {
        type: String,
        required:true,
        default:"low"
    },
    DueDate:{
        type:String,
        required:true
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
})
//create a model
const Todo = mongoose.model('Todo', todoSchema)
module.exports = {
    Todo
}
