# NOVID-19
Nobody wants COVID. Keeping up to date on statistics in the country as well as the statistics in your state can be one of the biggest wake up calls for Americans to stop the spread. Speacializing in number of positive cases, positive increase, number of people on ventilators and number of people hospitalized, the data provides up to date stats week to week. Stay informed and stay safe. 

## Motivation
Personally, I wanted to be able to work with an external API in order to play with live statistics and numbers. With the times, learning about working with API calls and learning about how the numbers in America keep raising could be one of the best things a person could do. 

## User Stories
- As a user, I want to be able to navigate through this app with ease.
- As a user, I want to be able to view recent statistics in the United States.
- As a user, I want to be able to view recent statistics in individual states of my choice.
- As a user, I want to register an account.
- As a user, I want to be able to login.
- As a logged in user, I want to be able to save states of my choice.
- As a logged in user, I want to be able to log out. 

## Technologies Used
- Postgres
- Express
- React
- Node.js
- SASS
- React Spring
- Chart.js

## Wireframing / Pre-Code Planning

![NVD19Wireframe](## Wireframing / Pre-Code Planning

![SPNWireframe](https://i.imgur.com/J7wPovB.png)

## Code Snippets
`
   const fetchSingleStateHistData = () => {
        const singStTempArr = []
        ByStateModel.allStateHistory().then(data => {
            setSingleState(data)

            for (let i = 0; i <= 20; i++) {
                singStTempArr.push(data[i])
            }
            setSingleStateHistArr(singStTempArr)
        })
    }
  `
  `
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
                                'rgba(114, 194, 23, 0.6)'
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
        </div>`
  
  
