import React, { useState } from 'react'
import { Line } from 'react-chartjs-2'

const OneStateLineChart = ({ oneStateHistArr, state }) => {
    const [stateData, setStateData] = useState()
    const oneStateHistArrRev = oneStateHistArr.reverse()
    const allStates = ['AL', 'AK', 'AZ', 'AR', 'CA', 'CO', 'CT', 'DE', 'FL', 'GA', 'HI', 'ID', 'IL', 'IN', 'IA', 'KS', 'KY', 'LA', 'ME', 'MD', 'MA', 'MI', 'MN', 'MS', 'MO', 'MT', 'NE', 'NV', 'NH', 'NJ', 'NM', 'NY', 'NC', 'ND', 'OH', 'OK', 'OR', 'PA', 'RI', 'SC', 'SD', 'TN', 'TX', 'UT', 'VT', 'VA', 'WA', 'WV', 'WI', 'WY']

    const oneStLabels = []
    const oneStLabelsRev = oneStLabels.reverse()
    const oneStData = []
    const oneState = []
    const posData = []
    const graphDate = []

    oneStateHistArrRev.forEach(function (item) {
        oneStLabels.push(item.date)
        oneStData.push(item.positive)
        oneState.push(item.state)
        // console.log(item.state)
    })


    const setDate = new Set(oneStLabelsRev)
    for (let date of setDate.values()) {
        graphDate.push(date)
    }

    const stateCompare = () => {
        allStates.forEach(function (state) {
            let histArrFilt = oneStateHistArr.filter((oneStateFilt) => oneStateFilt.state === state)
            if (state.toUpperCase() === histArrFilt[0].state) {
                posData.push(histArrFilt[0].positive)
            }
        })
    }
    stateCompare()

    // console.log(oneStData)
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