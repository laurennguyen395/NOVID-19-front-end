import React, { useState, useEffect } from 'react'
import ByStateModel from '../models/bystate'
import OneStateCardContainer from '../components/OneStateCardContainer'
import OneStateHospilatizedChart from '../components/OneStateHospilatizedChart'
import OneStateVentilatorChart from '../components/OneStateVentilatorChart'
import OneStatePositiveVsNegativeChart from '../components/OneStatePositiveVsNegativeChart'
import OneStateLineChart from '../components/OneStateLineChart'
import { useParams } from 'react-router-dom'

const OneState = () => {
    const [oneState, setOneState] = useState()
    const [oneStateHistory, setOneStateHistory] = useState()
    const { state } = useParams()


    useEffect(() => {
        fetchOneStateData()
        fetchOneStateHistoryData()
    }, [])

    const fetchOneStateData = () => {
        ByStateModel.show(state).then(data => {
            setOneState(data)
        })
    }

    const fetchOneStateHistoryData = () => {
        ByStateModel.allHistory().then(data => {
            setOneStateHistory(data)
        })
    }
console.log(oneStateHistory)
    if (!oneState) {
        return null
    }
    if (!oneStateHistory) {
        return null
    }

    return (
        <div>
            <h1>{state.toUpperCase()}</h1>

            <div className='inlineStuff'>
                <OneStateCardContainer oneState={oneState} />
                <OneStateHospilatizedChart oneState={oneState} />
                <OneStateVentilatorChart oneState={oneState} />
                <OneStatePositiveVsNegativeChart oneState={oneState} />
            </div>
                <OneStateLineChart oneStateHistory={oneStateHistory} />
        </div>
    )
}

export default OneState