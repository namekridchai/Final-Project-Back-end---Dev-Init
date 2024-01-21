const isLogin = (req,res,next)=>{
    if(!req.session.username){
        res.status(401)
        res.send('please log in before call this service')
        return;
    }
    next()
}

export default isLogin