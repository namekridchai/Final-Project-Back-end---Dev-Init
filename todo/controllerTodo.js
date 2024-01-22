import TodoList from "../model/to-do_list.js";


const createTodo = async(req,res)=>{
   
    const newTodo = new TodoList({
        user_id:req.session._id
        ,title: req.body.title
        ,description: req.body.description
        ,duedate: Date.parse( req.body.duedate)
        ,priority: req.body.priority
        ,status:req.body.status
    })

    await newTodo.save();
    
    res.status(201);
    res.send(`create new todo successfully ${newTodo}`);
}

const getAllTodo = async(req,res)=>{
 
    const allTodo = await TodoList.find({user_id:req.session._id})
    
    res.send(allTodo)

}

const getTodoByID = async(req,res)=>{
    const {id} = req.params 
    const todo = await TodoList.findById(id)
    
    res.send(todo)
    
}

const deleteTodoByID = async(req,res)=>{
    const {id} = req.params 
    await TodoList.findByIdAndDelete(id)

    res.send("delete successfully")
    
}

const updateTodoByID = async(req,res)=>{
    const {id} = req.params

    await TodoList.findByIdAndUpdate(id,{
        title: req.body.title
        ,description: req.body.description
        ,duedate: Date.parse( req.body.duedate)
        ,priority: req.body.priority
        ,status:req.body.status
    })

    res.send("update successfully")
    
}


export default {createTodo,getAllTodo,getTodoByID,deleteTodoByID,updateTodoByID}