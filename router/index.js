const router = require("express").Router();
const  Todo = require('../models/todo')



router.get('^/$|index', async(req, res) => {
    const  alltodo = await Todo.find()
    res.render('index',{todos:alltodo})
})

module.exports = router;