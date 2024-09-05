import react, { useState } from 'react'
import './LoginSignUp.css'
import user_icon from '../Assets/user2.png'
import email_icon from '../Assets/email2.png.png'
import password_icon from '../Assets/password2.png'
const LoginSignUp=()=>{
  const [action,setAction]=useState("Sign Up")
  const [start,setRefresh]=useState("Sign Up")
  return(
<div className='container'>
  <div className='header'>
    <div className='title'> {action}</div>
    <div className='underline'></div>
  </div>
  <div className='inputs' >
    <div className='input'>
      <img src={user_icon} alt=''/>
      <input type='text' placeholder='User_Name'/>
    </div>
    {action==="LogIn"?<div></div>:
     <div className='input'>
     <img src={email_icon} alt=''/>
     <input type='email' placeholder='Email Id'/>
   </div>
    }
   
    <div className='input'>
      <img src={password_icon} alt=''/>
      <input type='password' placeholder='Password'/>
    </div>
    {action==="Sign Up"?<div></div>:<div className='forgot-password'>Lost Password. <span>Click here</span> </div>}
    
    <div className='submit-container'>
      <div className={action==="LogIn"?"submit gray":"submit"}  onClick={()=>{setAction("Sign Up")}}>Sign Up</div>
      <div className={action==="Sign Up"?"submit gray":"submit"} onClick={()=>{setAction("LogIn")}}>LogIn</div>
    </div>
  </div>

</div>


  )
}
export default LoginSignUp;