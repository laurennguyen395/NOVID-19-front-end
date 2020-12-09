import React, { useState, useEffect } from 'react'
import ByStateModel from '../models/bystate'

const States = () => {
    const [state, setstates] = useState()

    useEffect(() => {
        fetchStateData()
    }, [])

    const fetchStateData = () => {
        ByStateModel.all(state).then(data => {
            setstates(data)
        })
    }
    console.log(state)
    return (
        <div>
            <h1>states</h1>
        </div>
    )
}

export default States