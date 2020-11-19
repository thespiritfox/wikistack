const express = require('express')
const wiki = express.Router()
const addPage = require('../views/addPage')
const layout = require('../views/layout')

wiki.get('/', function (req,res){
    res.send(layout(''))


})

wiki.post('/', function (req,res){
    res.send('got to POST /wiki/')

})

wiki.get('/add', function (req,res){
    res.send(addPage(''))


})











module.exports = wiki