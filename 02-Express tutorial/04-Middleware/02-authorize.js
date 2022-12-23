const authorize = (req,res,next)=>{
    console.log('authorize');
    const {users} = req.query;
    if(users ==='itachi'){
        req.users = {name:'prachanda',id:'3'}
        next();
    }else{
        res.status(401).send('Unauthorized')
    }
}
module.exports = authorize;