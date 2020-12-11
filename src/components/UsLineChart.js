import React, {useEffect} from 'react'
import { Line } from 'react-chartjs-2'

const LineTest = ({usHistArr}) => {
console.log(usHistArr[0].death) 

    return (

        <div className='onestline'>
        <Line className="line"
        data={{
            labels: ['Positive Increase', 'Negative Increase' ],
            datasets: [
                {
                    data: [1, 2, 3, 4 ,5],
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
        }}
    />
    </div>
    )
}

export default LineTest