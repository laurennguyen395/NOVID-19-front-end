import React, { useState } from 'react'
import { Line } from 'react-chartjs-2'

const OneStateLineChart = ({ singleState }) => {

    let singleStateRev = singleState.reverse()
    console.log(singleStateRev)
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
                            backgroundColor: [
                                'rgba(255,255,255, 0)',
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