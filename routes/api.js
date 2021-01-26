"use strict"

const mongoose = require("mongoose");
const Todos = require("../model").Todos

module.exports = function(app) {

    app
    .route("/api/addTodo")
    .post((req,res) => {

        const todosData = req.body;
    
        Todos.create(todosData, (err, data) => {
            if (err) {
                res.status(500).send({message: err.message || "Errors were encounterd"})
            }else {
                res.status(200).send( data)
            }
        })
    })


    app
    .route("/api/getTodo")
    .get((req,res) => {
        Todos.find({} , (err, data) => {
            if (err) {
                res.status(400).send({message: err.message})
            }else {
                
                res.status(200).send(data)
            }
        })
    })

    app
    .route("/api/updateTodo/:id")
    .put((req,res) => {
        const todoId = req.params.id

        Todos.findByIdAndUpdate(todoId, req.body, {useFindAndModify: false}, (err, data) => {
            if (err) {
                res.status(500).send({message: err.message})
            }else {
                res.status(200).send(data)
            }
        })
    })

    app
    .route("/api/delete/:id")
    .delete((req,res) => {
        const todoId = req.params.id

        Todos.findByIdAndDelete(todoId, (err, data) => {
            if (err) {
                res.status(500).send({message: err.message})
            }else {
                res.status(200).send({ message: "success"})
            }
        })
    })


}