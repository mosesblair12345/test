const express = require("express");
const port = 5000;
const app = express();

app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.post("/callback",(req,res)=>{
    console.log(req.body);
})

app.listen(port,()=>{
 console.log(`server is listening on port ${port}`)
})