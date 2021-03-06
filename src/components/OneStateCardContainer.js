import React from 'react'
import { Card } from 'react-bootstrap'


const OneStateCardContainer = ({oneState}) => {


    if (!oneState) {
        return null
    }




    return (
        <div>
<div className="usStatCards">
            <Card style={{ width: '13rem' }}>
                <Card.Body className="stat">
                    <Card.Title className="usStatText">Positive:</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted"></Card.Subtitle>
                    <Card.Text className="usStatNum">
                        {oneState.positive}
                    </Card.Text>
                </Card.Body>
            </Card>

            <Card style={{ width: '13rem' }}>
                <Card.Body className="stat">
                    <Card.Title className="usStatText">Negative:</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted"></Card.Subtitle>
                    <Card.Text className="usStatNum">
                    {oneState.negative}
                    </Card.Text>
                </Card.Body>
            </Card>

            <Card style={{ width: '13rem' }}>
                <Card.Body className="stat">
                    <Card.Title className="usStatText">Deaths:</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted"></Card.Subtitle>
                    <Card.Text className="usStatNum">
                    {oneState.death}
                    </Card.Text>
                </Card.Body>
            </Card>
            
            <Card style={{ width: '13rem' }}>
                <Card.Body className="stat">
                    <Card.Title className="usStatText">Death Increase:</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted"></Card.Subtitle>
                    <Card.Text className="usStatNum">
                    {oneState.deathIncrease}
                    </Card.Text>
                </Card.Body>
            </Card>
            </div>
        </div>
    )
}

export default OneStateCardContainer