const Tasks = require('../model/task')

module.exports = {
    getAll: async function (req, res) {
        const task = await Tasks.find();
        res.json(task)
    },

    getById: async function (req,res) {
        const id  = req.params.id;
        Tasks.find({_id: id})
            .then(task => res.json(task))
            .catch(err => res.json(err))
    },

    createNew: async function (req, res) {
        const body = req.body;
        const task = new Tasks(body);
        task.save()
            .then(task => res.json(task))
            .catch(err => res.json(err))
    },

    update: async function (req, res) {
        const body = req.body;
        const id = req.params.id;
        // console.log('Api input:' + body._id + '|'+ body.title  + '|'+ body.description  + '|'+ body.completed);

        Tasks.findOneAndUpdate({_id: id}, {title:body.title, description:body.description, completed: body.completed}, function(err, task){
            if (err) {
                res.json(err)     
            } else {
                console.log(`Api input:  ${task}`)
                res.json(task);
            }
        }    
        );
            
    },

    delete: async function (req, res) {
        const id = req.params.id;
        Tasks.deleteOne({ _id: id })
            .then(data => res.json(data))
            .catch(err => res.json(err));
    }
};