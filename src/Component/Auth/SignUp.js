import React, { useState } from 'react'
import './style.css'
import { useNavigate } from 'react-router-dom'
const SignUp = () => {
    const [name ,setName] = useState('')
    const [email ,setEmail] = useState('')
    const [password ,setPassword] = useState('')
    const Navigate = useNavigate();
    const HandleClick =()=>{
        let obj ={
            email:email,
            password:password
        }
        // if(localStorage.getItem('user')){
        if(name&&email&&password){
          
            localStorage.setItem('user' ,JSON.stringify(obj))
            alert("sign up successfully")
              Navigate('/login')
        }
        else{
            alert("Enter valid details")
        }
    
    }
    

  return (
    <div className='box-container'>
    <h3>Sign-up</h3>
      <div className="signup-page">
        <input type="text" name="" required onChange={(e)=>setName(e.target.value)} placeholder='Enter username' id="" />
        <input type="email" required  onChange={(e)=>setEmail(e.target.value)} placeholder='enter email' />
        <input type="password" required placeholder='enter password'  onChange={(e)=>setPassword(e.target.value)} name="" id="" />
        <button onClick={HandleClick}>Sign up</button>
      </div>
    </div>
  )
}

export default SignUp