const express =require('express');
const app = express();
const cors =require('cors');
const mongoose = require('mongoose');
const User = require('./models/user_model');

app.use(cors())
app.use(express.json())
mongoose.connect('mongodb://localhost:27017/mern-auth')


app.post('/api/register',async (req,res)=>{
    try{
        const user = await User.create(req.body)
        res.json({user:user})
    }
    catch(err){
        res.json({error:err})
    }
});

app.post('/api/login',async (req,res)=>{
    try{
        const user = await User.findOne({email:req.body.email,pass:req.body.pass})
        if (user){
            return user.json({status:"ok", user:true})
        }
        else{
            return user.json({status:"error", user:false})
        }
    }
    catch(err){
        res.json({error:err})
    }
});



app.listen(7777,()=>{
    console.log("Sever is running on port 7777");
});