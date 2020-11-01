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
        default:"open"
    },
    description: {
        type: String,
        required: true,
        minlength: 1,
        maxlength: 256,
    },
    priority: {
        type: String,
        required:true,
    },
    dueDate:{
        type:String,
        required:true
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
})
todoSchema.index({'$**': 'text'});
//create a model
const Todo = mongoose.model('Todo', todoSchema)
module.exports = {
    Todo
}
