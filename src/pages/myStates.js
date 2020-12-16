import React, { useState, useEffect } from 'react'
import StateModel from '../models/saveState'
import OneStateCard from '../components/OneStateCard'


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

  const mapSavedStates = () => {
    return states.forEach((state) => {
      console.log(state)
    })
  }


  if (!states.length) {
    return null
  }

  return (
    <div className="myStates">
      <h1>My States</h1>
      {mapSavedStates()}
      <OneStateCard states={states} key={states.id} />
    </div>
  )
}

export default MyStates