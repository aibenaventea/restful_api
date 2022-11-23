module.exports = (app) => {
    const express = require('express')

    app.use(express.urlencoded({extended:true}));
    app.use(express.json());

    const TasksController = require('../controllers/tasks')

    app.get('/getAll', (res,req) => {
        TasksController.getAll(res,req);
    });
    app.get('/getById/:id', (res,req) => {
        TasksController.getById(res,req);
    });
    app.post('/createNew', (res,req) => {
        TasksController.createNew(res,req);
    });
    app.put('/update/:id', (res,req) => {
        TasksController.update(res,req);
    });
    app.delete('/delete/:id', (res,req) => {
        TasksController.delete(res,req);
    });
}