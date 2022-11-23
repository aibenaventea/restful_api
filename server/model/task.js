const mongoose = require('../config/mongoose')

const TaskSchema = new mongoose.Schema({
    title: {type: String, required: [true, 'title: is empty']},
    description: {type: String, default:''},
    completed: {type: Boolean}
}, {timestamps:true}
);

const task = mongoose.model('task', TaskSchema);

module.exports = task;