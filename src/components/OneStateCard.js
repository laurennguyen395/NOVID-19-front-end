import React from 'react'

const OneStateCard = ({states}) => {
    console.log(states)


    return(
        <div>
        {states.map((state, index) => {
            return(<h3>{state.savedState.toUpperCase()}</h3>)
        })}
        </div>
    )
}


export default OneStateCard