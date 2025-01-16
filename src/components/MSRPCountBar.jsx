import React, { useState } from 'react';
import data from '../assets/data/data.json';
import { Container, Row, Col } from 'react-bootstrap';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const MSRPCountBar = () => {
    const invetoryCount = data?.avgInUSD;
    const chartOptions = data?.chartOptions;
    const invetoryCountType = Object.keys(invetoryCount);
    const [selectedType, setSelectedType] = useState(invetoryCountType[0]);
    return (
        <Container>
            <div className='sub-header'>
                Average MSRP in USD
                {
                    invetoryCountType.map((val, index) => (
                        <button key={'ichat' + index} onClick={() => setSelectedType(val)} className={val === selectedType ? 'active' : ''}>{val}</button>
                    ))
                }
            </div>

            <Row className="chart-cnt">
                <Col>
                    <Bar
                        data={invetoryCount[selectedType]}
                        options={chartOptions}
                    />
                </Col>
            </Row>
        </Container>
    )
}

export default MSRPCountBar