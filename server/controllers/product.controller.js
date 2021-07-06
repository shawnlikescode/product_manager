const express = require("express");
const product = require("../models/product.model");



module.exports = {
    index: (req, res) => {
        console.log("in the controller")
        product.find()
            .then(data => res.json({ results:data }))
            .catch(err => res.json(err.errors))
    },
    create: (req, res) => {
        product.create(req.body)
            .then(data => res.json({ results: data }))
            .catch(err => res.json(err.errors))
    },
    showOne: (req, res) => {
        product.findOne()
            .then(data => res.json({ results: data }))
            .catch(err => res.json(err.errors))
    },
    updateOne: (req, res) => {
        product.findOneAndUpdate({_id:req.params.id},req.body, {runValidators:true, new:true,useFindAndModify:false})
            .then(data => res.json({results: data}))
            .catch(err => res.json(err.errors))
    },
    destroy: (req, res) => {
        product.remove
            .then(data => res.json({ results: data }))
            .catch(err => res.json(err.errors))
    },
}