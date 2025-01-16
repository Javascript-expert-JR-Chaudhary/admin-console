import React from 'react';
import brandLogo from '../assets/logo.svg';
import supportLogo from '../assets/support.svg';
import { Container, Navbar } from 'react-bootstrap';

const HeaderSection = () => {
    return (
        <Navbar className='navbar-cnt'>
            <Container>
                <div className='logo-label'>
                    <img src={brandLogo} />
                    <span className='title'>Admin Console</span>
                    <button className='admin-view' variant="primary">ADMIN VIEW</button>
                </div>
                <div>
                    <span className='support'> <img src={supportLogo} /> Support</span>
                </div>
            </Container>
        </Navbar>
    )
}

export default HeaderSection