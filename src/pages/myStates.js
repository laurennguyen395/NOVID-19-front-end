import React, { useState, useEffect } from 'react'
import StateModel from '../models/saveState'


const MyStates = () => {
  const [states, setStates] = useState([])
  
  useEffect(() => {
    getStates()
  }, [])

  const getStates = () => {
    StateModel.show().then((states, index) => {
      setStates(states)
    })
  }
  
  // const mapSavedStates = () => {
  //   states.map((states, index) => {
  //     return states
  //   })
  // }

  console.log(states)
  return(
    <div className="myStates">
      <h1>My States</h1>
      <h3>C'mon lauren, You can do it. SAVE STATES HERE!!</h3>
    </div>
  )
}

export default MyStates