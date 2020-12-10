import React, { useState, useEffect } from 'react'
import ByStateModel from '../models/bystate'
import {useParams} from 'react-router-dom'

const OneState = () => {
    const [oneState, setOneState] = useState()
    const {state} = useParams()
    console.log(state)

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

    console.log(oneState)
    return (
        <div>
            <h1>{state.toUpperCase()}</h1>
        </div>  
    )
}

export default OneState