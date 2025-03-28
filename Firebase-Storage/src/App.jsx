import React from 'react'
import { googleAuth, signin, signupWithEmail } from './config/firebase'
import User from './User'

const App = () => {
  const handleGoogleAuth = async () => {
    let userData = await googleAuth()
    console.log(userData);

  }
  const login = async () => {
    let email = "dummy@gmail.com"
    let password = "password"
    let userdata = await signin(email, password)
    console.log(userdata);

  }
  return (
    <div>
      {/* <button onClick={login}>login</button>
      <button onClick={handleGoogleAuth}>google</button> */}
      <User/>
    </div>
  )
}

export default App