import React, { useState, useEffect } from 'react'
import ByStateModel from '../models/bystate'
import StateModel from '../models/saveState'
import { useHistory, Link } from 'react-router-dom'
import OneStateCardContainer from '../components/OneStateCardContainer'
import OneStateHospilatizedChart from '../components/OneStateHospilatizedChart'
import OneStateVentilatorChart from '../components/OneStateVentilatorChart'
import OneStatePositiveVsNegativeChart from '../components/OneStatePositiveVsNegativeChart'
import OneStateLineChart from '../components/OneStateLineChart'
import { useParams } from 'react-router-dom'

const allStates = ['AL', 'AK', 'AZ', 'AR', 'CA', 'CO', 'CT', 'DE', 'FL', 'GA', 'HI', 'ID', 'IL', 'IN', 'IA', 'KS', 'KY', 'LA', 'ME', 'MD', 'MA', 'MI', 'MN', 'MS', 'MO', 'MT', 'NE', 'NV', 'NH', 'NJ', 'NM', 'NY', 'NC', 'ND', 'OH', 'OK', 'OR', 'PA', 'RI', 'SC', 'SD', 'TN', 'TX', 'UT', 'VT', 'VA', 'WA', 'WV', 'WI', 'WY']
const fullStateNames = ['Alabama', 'Alaska', 'Arizona', 'Arkansas', 'California', 'Colorado', 'Connecticut', 'Delaware', 'Florida', 'Georgia', 'Hawaii', 'Idaho', 'Illinois', 'Indiana', 'Iowa', 'Kansas', 'Kentucky', 'Louisiana', 'Maine', 'Maryland', 'Massachusetts', 'Michigan', 'Minnesota', 'Mississippi', 'Missouri', 'Montana', 'Nebraska', 'Nevada', 'New Hampshire', 'New Jersey', 'New Mexico', 'New York', 'North Carolina', 'North Dakota', 'Ohio', 'Oklahoma', 'Oregon', 'Pennsylvania', 'Rhode Island', 'South Carolina', 'South Dakota', 'Tennessee', 'Texas', 'Utah', 'Vermont', 'Virginia', 'Washington', 'West Virginia', 'Wisconsin', 'Wyoming']

const OneState = (props) => {
    const [oneState, setOneState] = useState()
    const [oneStateHistory, setOneStateHistory] = useState()
    const [oneStateHistArr, setOneStateHistArr] = useState([])
    const [singleState, setSingleState] = useState()
    const [singleStateHistArr, setSingleStateHistArr] = useState([])
    const { state } = useParams()
    let history = useHistory()

    useEffect(() => {
        fetchOneStateData()
        fetchOneStateHistoryData()
        fetchSingleStateHistData()
    }, [])

    const fetchOneStateData = () => {
        ByStateModel.show(state).then(data => {
            setOneState(data)
        })
    }

    const fetchOneStateHistoryData = () => {
        const tempStArr = []
        ByStateModel.allHistory().then(data => {
            setOneStateHistory(data)

            for (let i = 0; i < 1175; i++) {
                tempStArr.push(data[i])
            }
            setOneStateHistArr(tempStArr)
        })
    }

    const fetchSingleStateHistData = () => {
        const singStTempArr = []
        ByStateModel.allStateHistory().then(data => {
            setSingleState(data)

            for (let i = 0; i <= 20; i++) {
                singStTempArr.push(data[i])
            }
            setSingleStateHistArr(singStTempArr)
        })
    }

    const addState = () => {
        const userId = localStorage.getItem('id')
        console.log(props.location.pathname.slice(8))
        StateModel.create(props.location.pathname.slice(8), userId).then(history.push('/mystates'))
    }

    if (!oneStateHistArr) {
        return null
    }
    if (!oneState) {
        return null
    }
    if (!singleState) {
        return null
    }

    const getFullName = () => {
        const indexOf = allStates.indexOf(state.toUpperCase())
        return fullStateNames[indexOf]
    }

    Object.values(oneStateHistArr)

    return (
        <div>
            <h1>{getFullName()}</h1>
            {singleState !== true ? (
                <>
                    <div className='inlineStuff'>
                        <OneStateCardContainer oneState={oneState} />
                        <OneStateHospilatizedChart oneState={oneState} />
                        <OneStateVentilatorChart oneState={oneState} />
                        <OneStatePositiveVsNegativeChart oneState={oneState} />
                    </div>
                    <OneStateLineChart singleState={singleStateHistArr} />
                </>
            ) : ('Please Reload The Page')}
            {/* <button id='saveState' onClick={addState}>Save State</button> */}
        </div>
    )
}

export default OneState