import React, { useState } from 'react';

function Login() {
  const [email, setEmail]= useState('')
  const [pass, setPass]= useState('')
  
async function registerUser(event){

  event.preventDefault()

  const response = await fetch('http://localhost:7777/api/login',{
  method:'POST',  
  headers: {
      'Content-Type': 'application/json',
    },

      body : JSON.stringify({
      email,
      pass
    }),
  })

  const data = await response.json()
  console.log(data);
}


  return (
    <div>
      <h1>Register</h1>
      <form onSubmit={registerUser}>
        <input value={email} 
        onChange={(e)=>setEmail(e.target.value)}
        type="email" name="email" 
        placeholder="email" />
        <br />
        <input value={pass} 
        onChange={(e)=>setPass(e.target.value)} 
        type="password" name="pass" 
        placeholder="Password" />
        <br />
        <input type="submit" />

      </form>
    </div>
  );
}

export default Login;
