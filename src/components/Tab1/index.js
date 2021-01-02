import React from 'react';
import './style.css';
import { Link } from 'react-router-dom';
import { Container, Row, Col, Image, Badge } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronCircleLeft, faChevronCircleRight } from '@fortawesome/free-solid-svg-icons';
import king from '../assests/king.gif';
import queen from '../assests/queen.gif';

class Tab1 extends React.Component {

    render() {

        return (
            <div>
                <span style={{ display: "flex", justifyContent: "space-between" }}>
                    <Link to="/" style={{ textDecoration: "none" }}><Badge style={{ background: "#fc6A03", color: "#fff", fontFamily: "'Inknut Antiqua', serif" }} className="ml-3 mt-4 py-2 px-3" ><FontAwesomeIcon icon={faChevronCircleLeft} /> Back</Badge></Link>
                    <a href="https://github.com/Dave3130/geektrust-finding-falcone" rel="noreferrer" target="_blank" style={{ textDecoration: "none" }}><Badge style={{ background: "#fc6A03", color: "#fff", fontFamily: "'Inknut Antiqua', serif" }} className="mr-3 mt-4 py-2 px-3" >Github </Badge></a>
                </span>
                <p className="problem-statement">After the recent war with neighbouring planet Falicornia, King Shan has exiled the Queen of Falicornia for 15 years.</p>

                <Container fluid={true}>
                    <Row noGutters={true} style={{ marginTop: "3rem", marginBottom: "3rem" }}>
                        <Col xs={12} sm={12} md={6} lg={6} className="col">
                            <div>
                                <Image src={king} alt="king" className="vehicleLogo" style={{ width: "15rem", borderRadius: "2rem" }} />
                                <p style={{ fontFamily: "'Inknut Antiqua', serif", color: "#FEF609", fontSize: "1.5rem" }} className="mt-2 text-center">King Shan</p>
                            </div>
                        </Col>
                        <Col xs={12} sm={12} md={6} lg={6} className="col">
                            <div>
                                <Image src={queen} alt="queen" className="vehicleLogo" style={{ width: "15rem", borderRadius: "2rem" }} />
                                <p style={{ fontFamily: "'Inknut Antiqua', serif", color: "#FEF609", fontSize: "1.5rem" }} className="mt-2 text-center">Queen AI Falcone</p>
                            </div>
                        </Col>
                    </Row>
                </Container>

                <p className="problem-statement">Queen Al Falcone is now in hiding. But if King Shan can find
                her before the years are up, she will be exiled for another 15 years...</p>

                <Link to="/tab2" style={{ textDecoration: "none" }}><button type="button" className="planetButton"  >Select Planets <FontAwesomeIcon icon={faChevronCircleRight} /></button></Link>

                <div className="footer">
                    <p >Coding Problem Statement: <a href="https://www.geektrust.in/coding-problem/frontend/space" rel="no_popper">https://www.geektrust.in/coding-problem/frontend/space</a></p>
                    <p >Designed & Developed by <a href="https://jaydeepdave.me/" rel="noreferrer" target="_blank">Jaydeep Dave</a></p>
                </div>

            </div >

        );
    };
}

export default Tab1;