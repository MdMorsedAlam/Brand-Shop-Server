const express=require('express')
const cors=require('cors')
const app =express();
const port=process.env.PORT||6868;

// middle were
app.use(cors())
app.use(express.json())







app.get('/',(req,res)=>{
    res.send("Brand Server Is Running......")
})


app.listen(port,()=>{
    console.log(`Server Is Running On localhost:${port}`)
})