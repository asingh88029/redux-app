import React, {useRef} from 'react';
import {useSelector, useDispatch} from 'react-redux';

const Home = () => {

  const email = useSelector(state=>state?.user?.email);
  
  const password = useSelector(state=>state?.user?.password);

  const language = useSelector(state=>state?.app?.language);

  const mode = useSelector(state=>state?.app?.mode);

  const dispatch = useDispatch()

  return (
    <div style={{backgroundColor : mode==="light" ? "white" : "black", color :  mode==="dark" ? "white" : "black"}}>

      <h1>Home Screen</h1>
      <p>Email: {email ? email : "NOT SET"}</p>
      <p>Password: {password ? password : "NOT SET"}</p>

      <p>Language: {language ? language : "NOT SET"}</p>

      <div>
        <select  
          onChange={(e)=>{
            dispatch({type:"CHANGE_LANGUAGE", payload: e.target.value})
          }}
        >
          <option value="english">English</option>
          <option value="hindi">Hindi</option>
        </select>

        <button onClick={()=>{ dispatch({type: "TOGGLE_THEME"}) }}>SWITCH TO {mode==="light" ? "DARK" : "LIGHT"}</button>
      </div>

    </div>
  )
}

export default Home