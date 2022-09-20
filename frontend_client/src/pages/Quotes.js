import React, { useState, useEffect } from 'react';
import { isExpired, decodeToken } from "react-jwt";
import {useNavigate} from "react-router-dom";
const Quotes =()=>{

    async function populateQuote(name){

        await fetch('http://localhost:7777/api/quotes',
        {headers:{'x-access-token':localStorage.getItem('token')}})
        .then(response => response.json())
        .then(data => setquotes(data.item),setName(name));
    }
    
    
    const history =useNavigate()
    const token = localStorage.getItem('token');
    const [quotes, setquotes]= useState('')
    const [name, setName]= useState('')
    useEffect(() => {
        if(token){
            const user = decodeToken(token);

            if(!user){
                alert('user does not exist')
                localStorage.removeItem('token');
                setquotes("UN AUTH");
                history('/Login')
            }

            else{
        
              populateQuote(user.f_name);
                
            }

        }
        
    
    }, [token]);
 
      
        
    
return( 
    <div>
<h1>quotes</h1>
<h2>Welcome {name}</h2>
<h2>{quotes}</h2>
</div>)

}
export default Quotes;