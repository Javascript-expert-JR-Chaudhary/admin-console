import React from 'react'
import { Container } from 'react-bootstrap';
import DashboardChip from '../components/dashboardChip';
import HistoryLog from '../components/historyLog';
import InventoryCountBar from '../components/inventoryCountBar';
import MSRPCountBar from '../components/MSRPCountBar';

const MainLayout = () => {
    return (
        <Container className='main-layout'>
            {/* Count Section */}
            <DashboardChip></DashboardChip>

            {/* Inventory Count Bar */}
            <InventoryCountBar></InventoryCountBar>

            {/* Average MSRP Count Bar */}
            <MSRPCountBar></MSRPCountBar>

            {/* Hsitory log Section */}
            <HistoryLog></HistoryLog>
        </Container>
    )
}

export default MainLayout;