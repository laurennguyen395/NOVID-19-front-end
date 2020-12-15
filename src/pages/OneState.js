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
    const [singleStateHistArr, setSingleStateHistArr] = useState()
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
        const singStTempArr = []
        ByStateModel.allStateHistory().then(data => {
            setSingleState(data)

            for (let i = 0; i <= 20; i++) {
                singStTempArr.push(data[i])
            }
            setSingleStateHistArr(singStTempArr)
        })
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


    Object.values(oneStateHistArr)
    // Object.values(singleStateHistArr)
    return (
        <div>
            <h1>{state.toUpperCase()}</h1>
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
            {/* <button id='saveState'>Save State</button> */}
        </div>
    )
}

export default OneState