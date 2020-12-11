import React, { useState, useEffect } from 'react'
import ByStateModel from '../models/bystate'
import OneStateCardContainer from '../components/OneStateCardContainer'
import {useParams} from 'react-router-dom'

const OneState = () => {
    const [oneState, setOneState] = useState()
    const {state} = useParams()
    console.log(oneState)

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
            <OneStateCardContainer oneState={oneState} />
        </div>  
    )
}

export default OneState