import React, { useState, useEffect } from 'react'
import ByStateModel from '../models/bystate'

const OneState = () => {
    const [onestate, setonestate] = useState('ca')   
    // req.params.state

    useEffect(() => {
        fetchOneStateData()
    }, [])

    const fetchOneStateData = () => {
        ByStateModel.show(onestate).then(data => {
            setonestate(data)
        })
    }
    console.log(onestate)
    return (
        <div>
            <h1>oneState</h1>
        </div>
    )
}

export default OneState