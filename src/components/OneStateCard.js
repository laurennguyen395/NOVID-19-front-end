import React from 'react'
import { Link } from 'react-router-dom'
import {Card} from 'react-bootstrap'


const OneStateCard = ({states}) => {
    console.log(states)


    return(
        <>
        {states.map((state, index) => {
            return(<Card className='statesCard'><Link className='mine' to={`/states/${state.savedState.toLowerCase()}`} key={Math.random()}>{state.savedState.toUpperCase()} </Link> </Card>)
        })}
        </>
    )
}


export default OneStateCard