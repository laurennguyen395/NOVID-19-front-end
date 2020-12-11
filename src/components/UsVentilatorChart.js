import React from 'react'
import { Pie } from 'react-chartjs-2'

const UsVentilatorChart = (props) => {

    return (
        <Pie
        data={{
            labels: ['On Ventilator', 'Death Increase' ],
            datasets: [
                {
                    label: '# of votes',
                    data: [props.us.onVentilatorCurrently, props.us.deathIncrease],
                    backgroundColor: [
                        'rgba(255, 99, 132, 0.2)',
                        'rgba(54, 162, 235, 0.2)',
                    ],
                    borderColor: [
                        'rgba(255, 99, 132, 1)',
                        'rgba(54, 162, 235, 1)'
                    ],
                    borderWidth: 1
                },
            ],
        }}
        height={250}
        width={250}
        options={{
            maintainAspectRatio: false,
        }}
    />
    )
}

export default UsVentilatorChart