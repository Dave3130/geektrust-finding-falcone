import React from 'react';
import './style.css';
import { Link } from 'react-router-dom';
import { Container, Row, Col, Card, Badge } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronCircleLeft, faChevronCircleRight } from '@fortawesome/free-solid-svg-icons'
import vehicleImg from '../Images/vehicle.js';


class Tab3 extends React.Component {

    render() {

        return (
            <div className="hero" >
                <Container fluid={true}>

                    <Link to="/tab2" style={{ textDecoration: "none" }}><Badge style={{ background: "#fc6A03", color: "#fff", fontFamily: "'Inknut Antiqua', serif" }} className="ml-3 mt-4 py-2 px-3" ><FontAwesomeIcon icon={faChevronCircleLeft} /> Back</Badge></Link>
                    <p className="heading">Vehicles at King Shan's disposal</p>

                    <Row noGutters={true} style={{ marginTop: "1rem", marginBottom: "3rem" }}>
                        {this.props.vehicles.map((data, vehicleIndex) =>

                            <Col xs={12} sm={6} md={4} lg={3} className="col" key={vehicleIndex}>

                                <Card className="text-center mt-5 mb-5" style={{ borderRadius: "1.6rem" }}>
                                    <Card.Body>
                                        {vehicleImg(data.name)}
                                        <Card.Title className="card-title">{data.name}</Card.Title>
                                        <p className="mb-2 mt-2 " style={{ fontSize: "1.1rem" }}>Max Distance - <span className="text-muted">{data.max_distance} megamiles</span></p>
                                        <p className="mb-2 mt-2 " style={{ fontSize: "1.1rem" }}>Speed - <span className="text-muted">{data.speed} megamiles/hour</span></p>
                                        <p className="mb-2 mt-2 " style={{ fontSize: "1.1rem" }}>Total no. - <span className="text-muted">{data.total_no}</span></p>

                                    </Card.Body>


                                </Card>

                            </Col>

                        )}
                    </Row>

                    <Link to="/tab4" style={{ textDecoration: "none" }}><button type="button" className="vehicleButton"  >Choose Vehicle <FontAwesomeIcon icon={faChevronCircleRight} /></button></Link>
                </Container>
                <div className="footer">
                    <p >Coding Problem Statement: <a href="https://www.geektrust.in/coding-problem/frontend/space" rel="no_popper">https://www.geektrust.in/coding-problem/frontend/space</a></p>
                    <p >Designed & Developed by <a href="https://jaydeepdave.me/" rel="noreferrer" target="_blank">Jaydeep Dave</a></p>
                </div>

            </div >

        );
    };
}

export default Tab3;