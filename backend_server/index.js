const express =require('express');
const app = express();
const cors =require('cors');
const mongoose = require('mongoose');
const User = require('./models/user_model');
const jwt = require('jsonwebtoken');

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
    
        const user = await User.findOne({email:req.body.email,pass:req.body.pass})
        if (user){

            const token =jwt.sign(
                {f_name: user.f_name,
                email:user.email},
                    'secret123'
            )

            return res.json({status:"ok", user:true,token:token})
        }
        else{
            return res.json({status:"error", user:false})
        }
   
  
});
app.get('/api/quotes',(req,res)=>{
    console.log(req.headers['x-access-token']);
    res.json({'item':'cake','token':req.headers});
});


app.listen(7777,()=>{
    console.log("Sever is running on port 7777");
});