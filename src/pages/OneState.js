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
    const [oneStateHistArr, setOneStateHistArr] = useState()
    const [singleState, setSingleState] = useState()
    const { state } = useParams()


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
        ByStateModel.allStateHistory().then(data => {
            setSingleState(data)
        })
    }
    console.log(singleState)
    if (!oneStateHistArr) {
        return null
    }

Object.values(oneStateHistArr)

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
                <OneStateLineChart oneStateHistArr={oneStateHistArr} state={state} />
        </div>
    )
}

export default OneState