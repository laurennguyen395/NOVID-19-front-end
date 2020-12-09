import React, { useState, useEffect } from 'react'
import UsModel from '../models/us'

const Home = () => {
  const [us, setUs] = useState()

  useEffect(() => {
    fetchData()
  }, [])

  const fetchData = () => {
    UsModel.all(us).then(data => {
      setUs(data)
    })
  }
  // console.log(us)
  return (
    <div>
      {/* <p>{us}</p> */}
    </div>
  )
}

export default Home
