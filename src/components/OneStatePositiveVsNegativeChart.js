import React from 'react'
import { Pie } from 'react-chartjs-2'

const UsPositiveVsNegativeChart = ({oneState}) => {

    return (
        <Pie
        data={{
            labels: ['Positive Increase', 'Negative Increase' ],
            datasets: [
                {
                    data: [oneState.positiveIncrease, oneState.negativeIncrease],
                    backgroundColor: [
                        'rgba(114, 194, 23, 0.4)',
                        'rgba(137, 194, 217,0.4)',
                    ],
                    borderColor: [
                        'rgba(114, 194, 23, 1)',
                        'rgba(137, 194, 217, 1)'
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

export default UsPositiveVsNegativeChart