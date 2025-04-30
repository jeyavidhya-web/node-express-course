require ('dotenv').config()

  //async error
 require('express-async-errors') 



  const express= require('express');
  const app=express();
  
const connectDB =require('./db/connect')
const productsRouter = require('./routes/products')
//middleware
const notFoundMiddleware = require('./middleware/not-found')
const errorMiddleware = require('./middleware/error-handler')
//json middleware

app.use(express.json());




//product routes

app.get('/',(req, res)=>{
  
  res.send('<h1>Store API</h1><a href="/api/v1/products">products route</a>');
})
app.use('/api/v1/products', productsRouter)
app.use(notFoundMiddleware);
app.use(errorMiddleware);
//create the port
const port=process.env.PORT || 3000;

const start = async()=> {
  try{
    //connect DB
    await connectDB(process.env.MONGO_URI)
    app.listen(port, () => console.log(`Server is listening port ${port}...`));
    
  } catch(error){
    console.log(error)
  }
};
start();