import React from 'react'
import { Pie } from 'react-chartjs-2'

const UsPositiveVsNegativeChart = ({us}) => {

    return (
        <Pie
        data={{
            labels: ['Positive Increase', 'Negative Increase' ],
            datasets: [
                {
                    data: [us.positiveIncrease, us.negativeIncrease],
                    backgroundColor: [
                        'rgba(114, 194, 23, 0.4)',
                        'rgba(137, 194, 217,0.4)',
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

export default UsPositiveVsNegativeChart