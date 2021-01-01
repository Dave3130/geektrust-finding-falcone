import React from 'react';
import './style.css';
import { Link } from 'react-router-dom';
import { Container, Row, Col, Card, Image } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRedoAlt } from '@fortawesome/free-solid-svg-icons';
import success from '../assests/success.svg';
import error from '../assests/noData.svg';

class Tab5 extends React.Component {

    render() {
        return (
            <div className="hero" >
                <Container fluid={true}>

                    <Row noGutters={true} style={{ marginTop: "1rem", marginBottom: "3rem" }}>

                        <Col xs={12} sm={12} md={12} lg={12} className="col">
                            <Card className="text-center mt-5 mb-5" style={{ borderRadius: "1.6rem", width: "90%" }}>
                                <Card.Body>
                                    <Card.Title style={{ fontSize: "1.8rem" }}>Result</Card.Title>
                                    {Object.keys(this.props.res).length === 2 ?
                                        <>
                                            <Image src={success} alt="success" style={{ width: "10rem" }} />
                                            <p style={{ fontFamily: "'Audiowide', cursive", color: "green", fontSize: "1.35rem" }}>Success !!</p>
                                            <p style={{ fontFamily: "'Audiowide', cursive", fontSize: "1.35rem" }}>Congratulations on Finding Falcone. King Shan is mighty pleased</p>
                                            <p style={{ fontFamily: "'Audiowide', cursive", fontSize: "1.35rem" }}>Time Taken: {this.props.time}</p>
                                            <p style={{ fontFamily: "'Audiowide', cursive", fontSize: "1.35rem" }}>Found on planet: {this.props.res.planet_name}</p>
                                        </>
                                        :
                                        Object.keys(this.props.res).length === 1 ?
                                            <>
                                                <Image src={error} alt="error" style={{ width: "10rem" }} />
                                                <p style={{ fontFamily: "'Audiowide', cursive", color: "Red", fontSize: "1.35rem" }}>Not Found !!</p>
                                                <p style={{ fontFamily: "'Audiowide', cursive", fontSize: "1.35rem" }}>Don't Loose hope.</p>
                                            </>
                                            :
                                            <>
                                                <Image src={error} alt="error" style={{ width: "10rem" }} />
                                                <p style={{ fontFamily: "'Audiowide', cursive", color: "Red", fontSize: "1.35rem" }}>Error !!</p>
                                                <p style={{ fontFamily: "'Audiowide', cursive", fontSize: "1.35rem" }}>Some Error Occurred. Please try after some time</p>
                                            </>
                                    }
                                </Card.Body>
                                <Link to="/" style={{ textDecoration: "none" }}><button type="button" className="retryButton" onClick={this.handleClick}>Try Again <FontAwesomeIcon icon={faRedoAlt} /></button></Link>
                            </Card>

                        </Col>
                    </Row>

                </Container>
                <div className="footer">
                    <p >Coding Problem Statement: <a href="https://www.geektrust.in/coding-problem/frontend/space" rel="no_popper">https://www.geektrust.in/coding-problem/frontend/space</a></p>
                    <p >Designed & Developed by <a href="https://jaydeepdave.me/" rel="noreferrer" target="_blank">Jaydeep Dave</a></p>
                </div>

            </div >

        );
    };
}

export default Tab5;