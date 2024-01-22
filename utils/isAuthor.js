import Log from '../model/daily_log.js'
import TodoList from '../model/to-do_list.js'
import CalendarEvent from '../model/calendar_event.js'

const isAuthorLog = async(req,res,next)=>{
    const {id} = req.params
    const log = await Log.findById(id)
    if(!log){
        res.status(400);
        res.send("invalid log ID");
        return;
    }
    if(log.user_id.equals(req.session._id)){
        next()
    }
    else{
        res.status(400)
        res.send('Unauthorize')
    }
    
}

const isAuthorTodo = async(req,res,next)=>{
    const {id} = req.params
    const log = await TodoList.findById(id)
    if(!log){
        res.status(400);
        res.send("invalid log ID");
        return;
    }
    if(log.user_id.equals(req.session._id)){
        next()
    }
    else{
        res.status(400)
        res.send('Unauthorize')
    }
    
}

const isAuthorEvent = async(req,res,next)=>{
    const {id} = req.params
    const log = await CalendarEvent.findById(id)
    if(!log){
        res.status(400);
        res.send("invalid log ID");
        return;
    }
    if(log.user_id.equals(req.session._id)){
        next()
    }
    else{
        res.status(400)
        res.send('Unauthorize')
    }
    
}


export default {isAuthorLog,isAuthorTodo,isAuthorEvent}