
import React from 'react';
import { Col, Container, Row, Button } from 'react-bootstrap';
import Menubar from '../Menubar/Menubar';
import './Banner.css';

const Banner = () => {
    return (
        <div className="text-white banner">
            <Menubar></Menubar>
            <Container>
                <Row >
                    <Col className="fw-bolder text-center mt-5 pt-5" sm={6}><h1  >BE THE BASKETBALL
                        <br />
                        STAR AND SHINE</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
                        <Button variant="danger">Danger</Button>
                    </Col>

                </Row>
            </Container>


        </div>
    );
};

export default Banner;