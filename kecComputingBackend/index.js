var express = require('express')
var app = express()
const PORT = 3001;
app.get('/',(req,res)=>{
    res.json("Welcome to Backend server")
})

app.get('/json',(req,res)=>{
    res.json({server:"welcome to Backend",url:"localhost",port:PORT})
})

app.get('/static',(req,res)=>{
    res.sendFile('D:/AFS Training/kecComputingBackend/index.html')
})

app.listen(PORT,()=>{
    console.log("Backend Server Started")
    console.log(`Server is running in ${PORT}`)
})