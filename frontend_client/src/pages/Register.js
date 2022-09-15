import React, { useState } from 'react';

function Register() {
  const [f_name, setF_name]= useState('')
  const [l_name, setL_name]= useState('')
  const [email, setEmail]= useState('')
  const [pass, setPass]= useState('')
  
async function registerUser(event){

  event.preventDefault()

  const response = await fetch('http://localhost:7777/api/register',{
  method:'POST',  
  headers: {
      'Content-Type': 'application/json',
    },

      body : JSON.stringify({
      f_name,
      l_name,
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
        <input  value= {f_name}
        onChange={(e)=> setF_name(e.target.value)}
        type="text" name="f_name" 
        placeholder="First Name" />
        <br />
        <input value={l_name}
        onChange={(e)=>setL_name(e.target.value)} 
        type="text" name="l_name" 
        placeholder="Last Name" />
        <br />
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

export default Register;
