import React from 'react'
import { Line } from 'react-chartjs-2'

const OneStateLineChart = ({oneStateHistArr}) => {
    const oneStateHistArrRev = oneStateHistArr.reverse()

    const oneStLabels = []
    const oneStData = []

    oneStateHistArrRev.forEach(function(item) {
        oneStLabels.push(item.date)
        oneStData.push(item.positive)
    })
    console.log(oneStLabels)
    console.log(oneStData)
    return (
        <div className='onestline'>
        <Line id="line"
        data={{
            labels: oneStLabels,
            datasets: [
                {
                    data: oneStData,
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
            responsive: true
        }}
    />
    </div>
    )
}

export default OneStateLineChart