import React from 'react'
import { Link } from 'react-router-dom'

const OneStateCard = ({states}) => {
    console.log(states)


    return(
        <div>
        {states.map((state, index) => {
            return(<Link to={`/states/${state.savedState.toLowerCase()}`} key={Math.random()}>{state.savedState.toUpperCase()} </Link>)
        })}
        </div>
    )
}


export default OneStateCard