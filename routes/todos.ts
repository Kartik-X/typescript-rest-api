import {Router} from "express"

import {Todo} from "../models/todo"

let todos:Todo[]=[]

const router=Router();

router.get("/",(req,res,next)=>{
    console.log(todos);
 res.status(200).json({todos:todos})
})

router.post("/todo",(req,res,next)=>{
    const newTodo:Todo={
        id:new Date().toISOString(),
        text:req.body.text
    }
    todos.push(newTodo)
    res.status(200).json(newTodo)
})

router.put("/todo/:todoId",(req,res,next)=>{
    const tid=req.params.todoId;
    const todoIndex=todos.findIndex(todoItem=>todoItem.id===tid)
    if(todoIndex>=0){
     todos[todoIndex]={id:todos[todoIndex].id,text:req.body.text}
     return res.status(201).json({message:"Succesfully updated the item",todos:todos})
    }
    res.status(404).json({message:"No such item found"})
})

router.delete("/todo/:todoId",(req,res,next)=>{
todos=todos.filter((todoItem)=>todoItem.id!=req.params.todoId)
res.status(200).json({message:"successfully deleted the item",todo:todos})
})




export default router;