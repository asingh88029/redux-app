import React, {useRef} from 'react';
// import {auth} from '../firebase';
// import {createUserWithEmailAndPassword, updateProfile} from 'firebase/auth'
import { useNavigate } from 'react-router-dom';

const Signup = () => {

  const navigate = useNavigate()

  const emailRef = useRef(null);

  const passwordRef = useRef(null);

  const nameRef = useRef(null);

  const profileURLRef = useRef(null);

  return (
    <div style={{display: 'flex', gap: 10}}>
      <input ref={emailRef} placeholder='Enter Email' type='email'/>
      <input ref={passwordRef} placeholder='Enter Password' type='password'/>
      <input ref={nameRef} placeholder='Enter Name' type='text'/>
      <input ref={profileURLRef} placeholder="Enter Profile URL" type='text'/>
      <button
        onClick={()=>{

          const email = emailRef.current.value;
          const password = emailRef.current.value;
          const name = nameRef.current.value;
          const profileURL = profileURLRef.current.value;

          // createUserWithEmailAndPassword(auth, email, password).then((userData)=>{
          //   console.log("USERDATA", userData);
            
          //   if(userData){

          //     //Update The Data: name, profile
          //     updateProfile(auth.currentUser, { 
          //       displayName: name, 
          //       photoURL: profileURL
          //     }).then(()=>{
          //       alert("Account Created")
          //       navigate('/signin')
          //     }).catch((err)=>{
          //       alert(err.message)
          //       console.log(err.message)
          //     })

          //   }
          // }).catch((err)=>{
          //   alert(err.message)
          //   console.log(err.message)
          // })

        }}
      >Register</button>
    </div>
  )
}

export default Signup