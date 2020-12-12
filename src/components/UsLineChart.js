import React, {useEffect} from 'react'
import { Line } from 'react-chartjs-2'

const UsLineChart = ({usHistArr}) => {

const usHistArrRev = usHistArr.reverse()

const labels =[]
const data = []

usHistArrRev.forEach(function(item) {
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