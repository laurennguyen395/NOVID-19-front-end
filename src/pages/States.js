import React, { useState, useEffect } from 'react'
import ByStateModel from '../models/bystate'
import OneStateCardContainer from '../components/OneStateCardContainer'

const States = () => {
    const [state, setstates] = useState()
    const [stateHistory, setStateHistory] = useState()

    useEffect(() => {
        fetchStateData()
        fetchStateHistoryData()
    }, [])

    const fetchStateData = () => {
        ByStateModel.all(state).then(data => {
            setstates(data)
        })
    }

    const fetchStateHistoryData = () => {
        ByStateModel.allHistory(stateHistory).then(data => {
            setStateHistory(data)
        })
    }

    if (!state) {
        return null
    }

    console.log(stateHistory)
    return (
        <div>
            <OneStateCardContainer stateHistory={stateHistory} />
        </div>
    )
}

export default States