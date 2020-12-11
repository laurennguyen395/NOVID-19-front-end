import React, { useState, useEffect } from 'react'
import ByStateModel from '../models/bystate'
import OneStateCardContainer from '../components/OneStateCardContainer'
import OneStateHospilatizedChart from '../components/OneStateHospilatizedChart'
import OneStateVentilatorChart from '../components/OneStateVentilatorChart'
import OneStatePositiveVsNegativeChart from '../components/OneStatePositiveVsNegativeChart'
import { useParams } from 'react-router-dom'

const OneState = () => {
    const [oneState, setOneState] = useState()
    const { state } = useParams()


    useEffect(() => {
        fetchOneStateData()
    }, [])

    const fetchOneStateData = () => {
        ByStateModel.show(state).then(data => {
            setOneState(data)
        })
    }

    if (!oneState) {
        return null
    }
    
    return (
        <div>
            <h1>{state.toUpperCase()}</h1>
            <button onClick={''}>Save State</button><br></br>

            <div className='inlineStuff'>
                <OneStateCardContainer oneState={oneState} />
                <OneStateHospilatizedChart oneState={oneState} />
                <OneStateVentilatorChart oneState={oneState} />
                <OneStatePositiveVsNegativeChart oneState={oneState} />
            </div>
        </div>
    )
}

export default OneState