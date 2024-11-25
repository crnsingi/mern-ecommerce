import React, {useState} from 'react'
import './CSS/LoginSignup.css'

const LoginSignup = () => {

  const [state,setState] = useState("Login");

  const login = async ()=>{

  }

  const signup = async () =>{

  }




  return (
    <div className='loginsignup'>
      <div className="loginsignup-container">
        <h1>{state}</h1>
        <div className="loginsignup-fields">
          {state==="Sign Up"?<input type="text" placeholder='Your Name' />:<></>}
          <input type="email" placeholder='Email Address'/>
          <input type="password" placeholder='Password' />
        </div>
        <button onClick={}>Continue</button>
        {state==="Sign Up"
        ?<p className="loginsignup-login">Already have an account? <span onClick={()=>{setState("Login")}}>Login Here</span></p>
        :<p className="loginsignup-login">Create an account? <span onClick={()=>{setState("Sign Up")}}>Click here</span></p>}
        <div className="loginsignup-agree"></div>
        <input type="checkbox" name='' id='' />
        <p>By continuing, i agree to the terms of the use & privacy policy.</p>
      </div>
    </div>
  )
}

export default LoginSignup