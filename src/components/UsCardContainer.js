import React, { useState } from 'react'
import { Card } from 'react-bootstrap'

const UsCardContainer = (props) => {

    if (!props) {
        return null
    }

    return (
        <div className="container">
            <div className="usStatCards" id='us'>
                <Card style={{ width: '13rem' }}>
                    <Card.Body className="stat">
                        <Card.Title className="usStatText">Positive:</Card.Title>
                        <Card.Subtitle className="mb-2 text-muted"></Card.Subtitle>
                        <Card.Text className="usStatNum">
                            {props.us.positive}
                        </Card.Text>
                    </Card.Body>
                </Card>

                <Card style={{ width: '13rem' }}>
                    <Card.Body className="stat">
                        <Card.Title className="usStatText">Negative</Card.Title>
                        <Card.Subtitle className="mb-2 text-muted"></Card.Subtitle>
                        <Card.Text className="usStatNum">
                            {props.us.negative}
                        </Card.Text>
                    </Card.Body>
                </Card>

                <Card style={{ width: '13rem' }}>
                    <Card.Body className="stat">
                        <Card.Title className="usStatText">Deaths:</Card.Title>
                        <Card.Subtitle className="mb-2 text-muted"></Card.Subtitle>
                        <Card.Text className="usStatNum">
                            {props.us.death}
                        </Card.Text>
                    </Card.Body>
                </Card>

                <Card style={{ width: '13rem' }}>
                    <Card.Body className="stat">
                        <Card.Title className="usStatText">Recovered:</Card.Title>
                        <Card.Subtitle className="mb-2 text-muted"></Card.Subtitle>
                        <Card.Text className="usStatNum">
                            {props.us.recovered}
                        </Card.Text>
                    </Card.Body>
                </Card>
            
            </div>
        </div>
    )
}

export default UsCardContainer