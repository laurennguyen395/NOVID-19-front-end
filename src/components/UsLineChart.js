import React, { useEffect } from 'react'
import { Line } from 'react-chartjs-2'

const UsLineChart = ({ usHistArr }) => {

    const usHistArrRev = usHistArr.reverse()

    const labels = []
    const data = []

    usHistArrRev.forEach(function (item) {
        labels.push(item.date)
        data.push(item.positive)
    })

    return (

        <div className='onestline'>
            <Line id="line"
                data={{
                    labels: labels,
                    datasets: [
                        {
                            label: 'Positive Cases Over Time',
                            data: data,
                            fill: true,
                            pointRadius: 3,
                            borderWidth: 2,
                            pointBackgroundColor: 'rgba(137, 194, 217, 0.6)',
                            backgroundColor: [
                                'rgba(255,255,255, 0)',
                            ],
                            borderColor: [
                                'rgba(114, 194, 23, 0.5)'
                            ]
                        },
                    ],
                }}
                height={600}
                width={800}
                options={{
                    maintainAspectRatio: true,
                }}
            />
        </div>
    )
}

export default UsLineChart