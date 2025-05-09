const jwt = require('jsonwebtoken')
const { BadRequestError } = require('../errors')
 
 const login= async(req,res)=>{
  const {username,password} = req.body;
  if(!username || !password){
    throw new BadRequestError ('Please provide email and password' )
  }

   
  console.log(username,password);
 
 
 //try to keep payload small,better experience for user
 //just for demo,in production use long ,complex and unguessable string value
 const id= new Date().getDate()
 const token = jwt.sign({id, username },process.env.JWT_SECRET,
  { expiresIn:'30d',}) 

  console.log(process.env.JWT_SECRET)
  console.log("Token created " + token)

 res.status(200).json({
  msg: 'user created',token})
}

  const dashboard = async (req,res)=>{
    
  console.log('User from token:',req.user);
  const { username } = req.user;

    
      
      const luckyNumber = Math.floor(Math.random() * 100)
      res.status(200).json({msg:`Hello, ${req.user.username}`,secret:`Here is your authorized data, your lucky number is ${luckyNumber}`});
   }                                              
    
   
 
  

 module.exports= {
  login,dashboard ,                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             
 }                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     