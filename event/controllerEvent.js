import Event from "../model/calendar_event.js";


const createEvent = async(req,res)=>{
   
    const newEvent = new Event({
        user_id:req.session._id
        ,title: req.body.title
        ,description:req.body.description
        ,start_date:Date.parse( req.body.start_date)
        ,end_date:Date.parse( req.body.end_date)
    })

    await newEvent.save();
    
    res.status(201);
    res.send(`create new event successfully ${newEvent}`);
}

const getAllEvent = async(req,res)=>{
 
    const allEvent = await Event.find({user_id:req.session._id})
    
    res.send(allEvent)

}

const getEventByID = async(req,res)=>{
    const {id} = req.params 
    const event = await Event.findById(id)
    
    res.send(event)
    
}

const deleteEventByID = async(req,res)=>{
    const {id} = req.params 
    await Event.findByIdAndDelete(id)

    res.send("delete successfully")
    
}

const updateEventByID = async(req,res)=>{
    const {id} = req.params
     
    await Event.findByIdAndUpdate(id,{
        title: req.body.title
        ,description:req.body.description
        ,start_date:Date.parse( req.body.start_date)
        ,end_date:Date.parse( req.body.end_date)
    })

    res.send("update successfully")
    
}


export default {createEvent,getAllEvent,getEventByID,deleteEventByID,updateEventByID}