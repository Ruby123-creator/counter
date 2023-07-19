import React ,{useState} from 'react'
import { useNavigate } from 'react-router-dom'

const Login = () => {
    const Navigate = useNavigate();
    const [name ,setName] = useState('')
    const [email ,setEmail] = useState('')
    const [password ,setPassword] = useState('')
    const HandleClick =()=>{
        let userdetails = JSON.parse(localStorage.getItem('user'))
        console.log(userdetails)
        if(userdetails.email===email&&userdetails.password===password){
           alert("login successfully")
            Navigate('/')
        }
        else{
            alert("details didn't match ,please try again")
        }
    }
    return (
        <div className='box-container'>
        <h3>Login</h3>
          <div className="signup-page" >
            <input type="text" name="" required onChange={(e)=>setName(e.target.value)} placeholder='Enter username' id="" />
            <input type="email" required  onChange={(e)=>setEmail(e.target.value)} placeholder='enter email' />
            <input type="password" placeholder='enter password' required  onChange={(e)=>setPassword(e.target.value)} name="" id="" />
            <button onClick={HandleClick}>Login Page</button>
          </div>
        </div>
      )
}

export default Login