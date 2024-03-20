const express= require('express')
const app=express()
const port=5000

app.get("/",(req,res)=>{
    res.send("hello Biraj")

})
app.get("/about",(req,res)=>{
    res.send("this is a about page")
})
app.get("/detail",(req,res)=>{
    res.send("this is a detail page")
})
app.get("/routing",(req,res)=>{
    res.send("this is how routing is done")
})
app.listen(port,()=>{
    console.log(`listening on ${port}`)

}
)