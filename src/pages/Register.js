import React, { useState } from 'react'
import UserModel from '../models/user'

const Register = props => {
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [currentState, setCurrentState] = useState('')

  const handleFirstName = e => {
    setFirstName(e.target.value)
  }  
  const handleLastName = e => {
    setLastName(e.target.value)
  }  
  const handleEmail = e => {
    setEmail(e.target.value)
  }
  const handlePassword = e => {
    setPassword(e.target.value)
  }
  const handleConfirmPassword = e => {
    setConfirmPassword(e.target.value)
  }
  const handleCurrentState = e => {
    setCurrentState(e.target.value)
  }
  const handleSubmit = e => {
    e.preventDefault()

    if (password === confirmPassword) {
      UserModel.create({ firstName, lastName, email, password, currentState })
        .then(data => {
          console.log('Successful register', data)
          // redirect to /login
          props.history.push('/mystates')
        })
    }
  }

  return (
    
    <div className="RegDiv">
      <h2>Register</h2>
      <form onSubmit={ handleSubmit }>
        <div className="form-group">
          <label htmlFor="name">First Name: </label>
          <input className="RegInputBox"
            onChange={ handleFirstName } 
            value={ firstName }
            type="text" 
            id="firstName" 
            name="firstName" 
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="name">Last Name: </label>
          <input className="RegInputBox"
            onChange={ handleLastName } 
            value={ lastName }
            type="text" 
            id="lastName" 
            name="lastName" 
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="name">Email: </label>
          <input className="RegInputBox"
            onChange={ handleEmail } 
            value={ email } 
            type="email" 
            id="email" 
            name="email" 
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="name">Password: </label>
          <input className="RegInputBox"
            onChange={ handlePassword } 
            value={ password } 
            type="password" 
            id="password" 
            name="password" 
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="confirm-password">Confirm Password: </label>
          <input className="RegInputBox"
            onChange={ handleConfirmPassword } 
            value={ confirmPassword } 
            type="password" 
            id="confirm-password" 
            name="confirm-password" 
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="name">Current State: </label>
          <input className="RegInputBox"
            onChange={ handleCurrentState } 
            value={ currentState }
            type="text" 
            id="currentState" 
            name="currentState" 
            required
          />
        </div>
        <button type="submit">Register</button>
      </form>
    </div>
  )
}

export default Register