import React from 'react'
import { useEffect } from 'react';
const Quotes =()=>{

    async function populateQuote(){
        const data = await fetch('http://localhost:7777/api/quotes',{
            
            headers:{
                'x-access-token':localStorage.getItem('token'),
            }


        })
        console.log(data.json());
    }

    useEffect(() => {
        const token = localStorage.getItem('token')
    
        if (token){
            const user =wt_decode(token)
    
            if (!user){
                localStorage.removeItem('token')
                window.location.href='/login'
            }
            else{
                populateQuote()
            }
    
        }}, [])



return <h1>quotes</h1>

}
export default Quotes;