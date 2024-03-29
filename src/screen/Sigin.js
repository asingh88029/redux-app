import React, {useRef} from 'react';
import {auth} from '../firebase';
import {signInWithEmailAndPassword} from 'firebase/auth'
import { useNavigate } from 'react-router-dom';

const Signin = () => {

  const navigate = useNavigate()

  const emailRef = useRef(null);

  const passwordRef = useRef(null);

  return (
    <div style={{display: 'flex', gap: 10}}>
      <input ref={emailRef} placeholder='Enter Email' type='email'/>
      <input ref={passwordRef} placeholder='Enter Password' type='password'/>
      <button
        onClick={()=>{

          const email = emailRef.current.value;
          const password = emailRef.current.value;

          signInWithEmailAndPassword(auth, email, password).then((userData)=>{

            if(userData){
              console.log(userData)
              alert("SIGNIN Successfully")
              navigate('/')
            }

          }).catch((err)=>{
            alert(err.message)
            console.log(err.message)
          })

        }}
      >Signin</button>
    </div>
  )
}

export default Signin