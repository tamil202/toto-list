const router = require('express').Router()
const todo = require('../models/todo');



router.post("/add/todo", (req, res) => {
  const  {todo}  = req.body;
  const newtodo = new Todo({ todo })
  
  newtodo.save()
    .then(() => {
      console.log(`successfully added`);
      res.redirect('/index')
    }).catch((err) => {
      console.log(`error : ${err}`);
    })
  
  
})
  .get('/delete/todo/:_id', (req,res) => {
    const { _id } = req.params;
    todo.deleteOne({ _id })
    
      .then(() => {
        console.log("deleted");
        res.redirect('/index')
      }).catch((err) => {
      console.log(`error : ${err}`);
    })
  })


module.exports = router