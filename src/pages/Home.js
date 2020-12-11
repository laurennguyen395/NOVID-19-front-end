import React, { useState, useEffect } from 'react'
import UsModel from '../models/us'
import { Link } from 'react-router-dom'
import UsCardContainer from '../components/UsCardContainer'
import UsHospitalizedChart from '../components/UsHospitalizedChart'
import UsVentilatorChart from '../components/UsVentilatorChart'
import UsPositiveVsNegativeChart from '../components/UsPositiveVsNegativeChart'
import UsLineChart from '../components/UsLineChart'
import { Card } from 'react-bootstrap'

const allStates = ['AL', 'AK', 'AZ', 'AR', 'CA', 'CO', 'CT', 'DE', 'FL', 'GA', 'HI', 'ID', 'IL', 'IN', 'IA', 'KS', 'KY', 'LA', 'ME', 'MD', 'MA', 'MI', 'MN', 'MS', 'MO', 'MT', 'NE', 'NV', 'NH', 'NJ', 'NM', 'NY', 'NC', 'ND', 'OH', 'OK', 'OR', 'PA', 'RI', 'SC', 'SD', 'TN', 'TX', 'UT', 'VT', 'VA', 'WA', 'WV', 'WI', 'WY']
// Could make each state an opject with upper lower and full name. allStates.filter((state) => {
// return state.abv = state
// })

const Home = () => {
  const [us, setUs] = useState()
  const [usHistory, setUsHistory] = useState()

  useEffect(() => {
    fetchUsData()
    fetchUsHistoryData()
  }, [])

  const fetchUsData = () => {
    UsModel.all().then(data => {
      setUs(data[0])
    })
  }
  
  const fetchUsHistoryData = () => {
    UsModel.allHistory().then(data => {
      setUsHistory(data)
    })
  }

  if (!us) {
    return null
  }

  if (!usHistory) {
    return null
  }

  const stateCode = allStates.map(function (item) {
    return <Link to={`/states/${item.toLowerCase()}`} key={Math.random()}>{item} </Link>
  });

  return (
    <div>

      <Card className='states'>{stateCode}</Card>

      <h1>US STATS</h1>

      <div className='inlineStuff'>
        <UsCardContainer us={us} />
        <UsHospitalizedChart us={us} />
        <UsVentilatorChart us={us} />
        <UsPositiveVsNegativeChart us={us} />
      </div>

      <div className='line'>
        <UsLineChart usHistory={usHistory} />
      </div>


    </div>
  )
}

export default Home
