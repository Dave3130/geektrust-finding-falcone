import React from 'react';
import './style.css';
import { Link } from 'react-router-dom';
import { Container, Row, Col, Dropdown, Card, Image, Badge } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronCircleLeft, faChevronCircleRight } from '@fortawesome/free-solid-svg-icons'
import vehicleImg from '../Images/vehicle.js';
import planetImg from '../Images/planet.js';
import noData from '../assests/noData.svg';

class Tab4 extends React.Component {

    render() {

        return (
            <div className="hero" >
                <Container fluid={true}>

                    {this.props.selectedPlanets.length > 0 ? (
                        <>
                            <Link to="/tab3" style={{ textDecoration: "none" }}><Badge style={{ background: "#fc6A03", color: "#fff", fontFamily: "'Inknut Antiqua', serif" }} className="ml-3 mt-4 py-2 px-3" ><FontAwesomeIcon icon={faChevronCircleLeft} /> Back</Badge></Link>
                            <p className="heading">Select your favourite vehicles for the mission</p>
                            <h3 className="text-center">
                                <Badge style={{ background: "#fc6A03", color: "#fff", fontFamily: "'Inknut Antiqua', serif", fontSize: "1.2rem" }} className="py-2 px-3">Total Time: {this.props.timeTaken}</Badge>
                            </h3>

                            <Row noGutters={true} style={{ marginTop: "1rem", marginBottom: "3rem" }}>
                                {this.props.selectedPlanets.map((data, planetIndex) =>

                                    <Col xs={12} sm={6} md={4} lg={3} className="col" key={planetIndex}>
                                        <>
                                            <Card className="text-center mt-5 mb-5" style={{ borderRadius: "1.6rem" }}>
                                                <Card.Body>
                                                    {planetImg(data.name)}
                                                    <Card.Title className="card-title">{data.name}</Card.Title>
                                                    <p className="mb-2 mt-2 " style={{ fontSize: "1.1rem" }}>Distance - <span className="text-muted">{data.distance} megamiles</span></p>

                                                    <Dropdown className="mt-2" >
                                                        <Dropdown.Toggle variant="success" id="dropdown-basic" style={{ fontFamily: "'Inknut Antiqua', serif", fontSize: "0.8rem", fontWeight: "500" }}>
                                                            {Object.keys(this.props.selectedVehicles[planetIndex]).length === 0 ? "Select" : this.props.selectedVehicles[planetIndex].data.name}
                                                        </Dropdown.Toggle>

                                                        <Dropdown.Menu>
                                                            {this.props.vehicles.map((vehicle, vehicleIndex) =>

                                                                vehicle.max_distance >= data.distance && vehicle.total_no > 0 ?
                                                                    <Dropdown.Item style={{ fontFamily: "'Inknut Antiqua', serif", fontSize: "0.8rem", fontWeight: "500" }} key={vehicleIndex} onClick={() => this.props.onClick(vehicleIndex, planetIndex)}>{vehicle.name} ({vehicle.total_no})</Dropdown.Item>
                                                                    :
                                                                    <Dropdown.Item key={vehicleIndex} style={{ fontFamily: "'Inknut Antiqua', serif", fontSize: "0.8rem", fontWeight: "500" }} disabled="true" >{vehicle.name} ({vehicle.total_no})</Dropdown.Item>
                                                            )}
                                                        </Dropdown.Menu>

                                                    </Dropdown>
                                                </Card.Body>


                                            </Card>
                                            {
                                                Object.keys(this.props.selectedVehicles[planetIndex]).length !== 0 &&
                                                vehicleImg(this.props.selectedVehicles[planetIndex].data.name)
                                            }
                                        </>
                                    </Col>

                                )}
                            </Row>
                            {this.props.selectedVehicles[0].data && this.props.selectedVehicles[1].data && this.props.selectedVehicles[2].data && this.props.selectedVehicles[3].data &&
                                <Link to="/tab5" style={{ textDecoration: "none" }}><button type="button" className="findButton" onClick={this.props.find}>Find Falcone <FontAwesomeIcon icon={faChevronCircleRight} /></button></Link>
                            }

                            <div className="footer">
                                <p >Coding Problem Statement: <a href="https://www.geektrust.in/coding-problem/frontend/space" rel="no_popper">https://www.geektrust.in/coding-problem/frontend/space</a></p>
                                <p >Designed & Developed by <a href="https://jaydeepdave.me/" rel="noreferrer" target="_blank">Jaydeep Dave</a></p>
                            </div>
                        </>
                    )
                        :
                        <div className="text-center mt-5 mb-5" >
                            <Image src={noData} alt="no data" className="mb-2" style={{ width: "20rem" }} />
                            <h4 style={{ color: "#fff", fontFamily: "'Inknut Antiqua', serif" }}>No Data Found !!</h4>
                            <h5 style={{ color: "#fff", fontFamily: "'Inknut Antiqua', serif" }} className="mt-3">Please <Link to="/tab2" >click</Link> here to select Planets</h5>
                            <p className="footer mt-5">Designed & Developed by <a href="https://jaydeepdave.me/" rel="noreferrer" target="_blank">Jaydeep Dave</a></p>
                        </div>
                    }

                </Container>


            </div >

        );
    };
}

export default Tab4;