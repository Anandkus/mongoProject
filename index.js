const express=require("express")
const port=process.env.PORT ||3001
const path = require('path')
const hbs=require('hbs')
require('./db/conn')
//table
const User=require('./models/insert')

const app=express()

// //built in middleware  to acces file in public folder
const p=path.join(__dirname,'/public')
//console.log(p)
app.use(express.static(p))

//to acces action data
app.use(express.urlencoded({extended:false}))

// //to set engine
app.set("view engine", "hbs")
// //partials folder access 
const part=path.join(__dirname,'/partials')
hbs.registerPartials(part)

app.get("/",(req,res)=>{
res.render("index")

})
app.post("/res",async(req,res)=>{
try{  
//res.send(req.body)
const userData=new User(req.body)
// res.send(userData)
await userData.save()
res.render("index")

}
catch(e){
    res.send("errore="+e)
}
})

//in route ke alawa kuch or dalne pr ye call hoga 
//ye bootum me dalna hai 
app.get('*',(req,res)=>{
    res.send("error page ")
}) 



app.listen(port,()=>{
    console.log(`server is run http://localhost:${port}`)
})