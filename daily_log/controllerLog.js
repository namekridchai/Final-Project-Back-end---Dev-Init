import Log from '../model/daily_log.js'


const createLog = async(req,res)=>{
   
    const newLog = new Log({
        user_id:req.session._id
        ,content:req.body.content
        ,date:Date.parse( req.body.date)
    })

    await newLog.save();
    
    res.status(201);
    res.send(`create new log successfully ${newLog}`);
}

const getAllLog = async(req,res)=>{
 
    const allLog = await Log.find({user_id:req.session._id})
    
    res.send(allLog)

}

const getLogByID = async(req,res)=>{
    const {id} = req.params 
    const log = await Log.findById(id)
    
    res.send(log)
    
}

const deleteLogByID = async(req,res)=>{
    const {id} = req.params 
    await Log.findByIdAndDelete(id)

    res.send("delete successfully")
    
}

const updateLogByID = async(req,res)=>{
    const {id} = req.params 
    await Log.findByIdAndUpdate(id,{
        content:req.body.content
        ,date:Date.parse( req.body.date)
    })

    res.send("update successfully")
    
}


export default {createLog,getAllLog,getLogByID,deleteLogByID,updateLogByID}