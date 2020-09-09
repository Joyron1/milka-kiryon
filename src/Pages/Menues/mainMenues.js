import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col, Button } from 'react-bootstrap';
import './mainMenues.css';

class MainMenues extends Component {

    state = {

    }

    goToPath(num) {
        if (num == 1)
            setTimeout(function () { window.location.pathname = "/cafemenu"; }, 500);
        else if (num == 2)
            setTimeout(function () { window.location.pathname = "/barmenu"; }, 500);

    }

    render() {
        return (
            <div className="mainView">
                <div className="row no-gutters CafeBtn">
                    <div className="col-12"><button className="btn btn-outline-light" id="menuBtn" onClick={() => this.goToPath(1)}>  תפריט בית קפה </button></div>
                </div>
                <div className="row no-gutters BarBtn">
                    <div className="col-12"><button className="btn btn-outline-light" id="menuBtn" onClick={() => this.goToPath(2)}>  תפריט בר </button></div>
                </div>

                {/* <Container className="menuButtons">
                    <Row>
                        <Col xs={12} className="button">
                            <Link to="/cafemenu" className="menuLink">
                                <Button variant="light" id="buttonDisplay">
                                    תפריט בית קפה
                            </Button>
                            </Link>
                        </Col>
                    </Row>

                    <Row>
                        <Col xs={12} className="button">
                            <Link to="/barmenu" className="menuLink">
                                <Button variant="light" id="buttonDisplay">
                                    תפריט בר
                            </Button>
                            </Link>
                        </Col>
                    </Row>



                </Container> */}



            </div>
        );
    }
}

export default MainMenues;