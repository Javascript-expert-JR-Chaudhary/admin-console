import React from 'react'
import data from '../assets/data/data.json';
import { Card } from 'react-bootstrap';

const DashboardChip = () => {
    const dashboardChip = data?.dashboardChip;
    return (
        <>

            <div className='main-header'>
                Inventory
            </div>
            <div className='sub-header'>
                Recent Gathered Data 04/01/24
            </div>
            <div className="count-chip">
                {
                    dashboardChip.map((val, index) => (
                        // <Col lg={3} md={6} key={index}>
                        <Card key={index}>
                            <Card.Body>
                                <Card.Title className='count'>{val.count}</Card.Title>
                                <Card.Text className='label'>{val.label}</Card.Text>
                                {/* <Button variant="primary">View Details</Button> */}
                            </Card.Body>
                        </Card>
                        // </Col>
                    ))
                }


            </div>

        </>
    )
}

export default DashboardChip