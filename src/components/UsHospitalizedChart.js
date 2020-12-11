import React from 'react'
import { Pie } from 'react-chartjs-2'

const UsHospitalizedChart = (props) => {

    return (
        <Pie
        data={{
            labels: ['Hospitalized', 'Positive Increase', ],
            datasets: [
                {
                    data: [props.us.hospitalized, props.us.positiveIncrease],
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
        height={4}
        width={6}
        options={{
            maintainAspectRatio: false,
        }}
    />
    )
}

export default UsHospitalizedChart