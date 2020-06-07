const express = require("express")
const path = require("path")
const redis = require("redis")
const client = redis.createClient({
    host: "redis-server",
    port: 6379
  });


const app = express()
const PORT = process.env.PORT || 3000

app.use("/build",express.static(path.join(__dirname, "build")))

app.get("/", (req,res)=>{
    res.status(200)
    res.sendFile(path.join(__dirname, "index.html"))
})

client.get("visits", (err,visits)=>{
    if(visits === null){ client.set("visits", 0)}
})

app.get("/visits", (req,res, next)=>{
    client.get("visits", (err,visits)=>{
        if(err) return next(err)
        res.json(parseInt(visits))
    })  
})

app.get("/visits/add", (req,res, next)=>{
    client.get("visits", (err,visits)=>{
        if(err) return next(err)
        client.set("visits", parseInt(visits) +1 )
        res.json(parseInt(visits)+1)
    })  
})


function errorHandler(error, req, res, next) {
    //  console.log(err.stack);
    const defaultErr = {
      log: 'Express error handler caught unknown middleware error',
      status: 400,
      message: { err: 'An error occurred' },
    };
    const errorObj = Object.assign(defaultErr, error);
    console.log(`Here is the error object's response: ${errorObj.log}`);
  
    res.status(errorObj.status).json(errorObj.message);
  }

app.listen(PORT, ()=>{console.log(`listening on port ${PORT}`)})