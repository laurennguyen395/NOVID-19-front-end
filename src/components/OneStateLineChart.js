import React, { useState } from 'react'
import { Line } from 'react-chartjs-2'

const OneStateLineChart = ({ singleState }) => {

    let singleStateRev = singleState.reverse()

    const posData = []
    const graphDate = []

    
    const stateLoop = () => {
        singleStateRev.forEach(function (item) {
            posData.push(item.positive)
            graphDate.push(item.date)
        })
    }
    stateLoop()

    return (
        <div className='onestline'>
            <Line id="line"
                data={{
                    labels: graphDate,
                    datasets: [
                        {
                            label: 'Positive Cases Over Time',
                            data: posData,
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