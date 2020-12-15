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
const fullStateNames = ['Alabama','Alaska','Arizona','Arkansas','California','Colorado','Connecticut','Delaware','Florida','Georgia','Hawaii','Idaho','Illinois','Indiana','Iowa','Kansas','Kentucky','Louisiana','Maine','Maryland','Massachusetts','Michigan','Minnesota','Mississippi','Missouri','Montana','Nebraska','Nevada','New Hampshire','New Jersey','New Mexico','New York','North Carolina','North Dakota','Ohio','Oklahoma','Oregon','Pennsylvania','Rhode Island','South Carolina','South Dakota','Tennessee','Texas','Utah','Vermont','Virginia','Washington','West Virginia','Wisconsin','Wyoming']

const Home = () => {
  const [us, setUs] = useState()
  const [usHistory, setUsHistory] = useState()
  const [usHistArr, setUsHistArr] = useState([])

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
    const tempArr = []
    UsModel.allHistory().then(data => {
      setUsHistory(data)

      for (let i = 0; i <= 20; i++) {
        tempArr.push(data[i])
      }
      setUsHistArr(tempArr)
    })
  }

  if (!us) {
    return null
  }

  if (!usHistory) {
    return null
  }

  if (usHistArr.length === 0) {
    return null
  }

  const stateCode = allStates.map(function (item) {
    return <Link to={`/states/${item.toLowerCase()}`} key={Math.random()}>{item} </Link>
  });

  const fullNameStateCode = (allStates, fullStateNames) => {
    const iterator = fullStateNames.values()
    for (let i = 0; i < allStates.length; i++) {
      for (let j = 0; j < fullStateNames.length; j++) {
        if (i === j) {
          for (const value of iterator) {
            console.log(value)
          }
        }
      }
    }
  }
  fullNameStateCode(allStates, fullStateNames)
  
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
        <UsLineChart usHistArr={usHistArr} />
    </div>
  )
}

export default Home
