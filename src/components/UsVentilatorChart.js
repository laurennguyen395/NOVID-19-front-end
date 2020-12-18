import React from 'react'
import { Pie } from 'react-chartjs-2'

const UsVentilatorChart = ({us}) => {

    return (
        <Pie
        data={{
            labels: ['On Ventilator', 'Death Increase' ],
            datasets: [
                {
                    label: '# of votes',
                    data: [us.onVentilatorCurrently, us.deathIncrease],
                    backgroundColor: [
                        'rgba(114, 194, 23, 0.5)',
                        'rgba(137, 194, 217,0.5)',
                    ],
                    borderColor: [
                        'rgba(114, 194, 23, 0.5)',
                        'rgba(137, 194, 217, 0.5)'
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