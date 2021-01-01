import React from 'react';
import './style.css';
import { Link } from 'react-router-dom';
import { Container, Row, Col, Image, Card, Badge } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronCircleLeft, faWindowClose, faChevronCircleRight } from '@fortawesome/free-solid-svg-icons'
import planetImg from '../Images/planet.js';
import Planet1 from '../assests/planet1.svg';
import donlon from '../assests/donlon.svg';
import enchai from '../assests/enchai.svg';
import jebing from '../assests/jebing.svg';
import sapir from '../assests/sapir.svg';
import lerbin from '../assests/lerbin.svg';
import pingasor from '../assests/pingasor.svg';


class Tab2 extends React.Component {

    render() {

        return (
            <div className="hero" >
                <Link to="/tab1" style={{ textDecoration: "none" }}><Badge style={{ background: "#fc6A03", color: "#fff", fontFamily: "'Inknut Antiqua', serif" }} className="ml-3 mt-4 py-2 px-3" ><FontAwesomeIcon icon={faChevronCircleLeft} /> Back</Badge></Link>
                <p className="heading">Select any four planets you want to search in:</p>
                <div id="wrapper">
                    <Image src={Planet1} id="center" />
                    <Image src={donlon} id="donlon" className="planet" onClick={(e) => this.props.onClick(0)} />
                    <Image src={enchai} id="enchai" className="planet" onClick={(e) => this.props.onClick(1)} />
                    <Image src={jebing} id="jebing" className="planet" onClick={(e) => this.props.onClick(2)} />
                    <Image src={sapir} id="sapir" className="planet" onClick={(e) => this.props.onClick(3)} />
                    <Image src={lerbin} id="lerbin" className="planet" onClick={(e) => this.props.onClick(4)} />
                    <Image src={pingasor} id="pingasur" className="planet" onClick={(e) => this.props.onClick(5)} />
                </div>
                <Container fluid={true}>
                    <Row noGutters={true} style={{ marginTop: "2.6rem", marginBottom: "3rem" }}>
                        {this.props.selectedPlanets.map((data, index) =>
                            <Col xs={12} sm={6} md={4} lg={3} className="col" key={index}>
                                <Card className="text-center mt-5 mb-5" style={{ borderRadius: "1.6rem" }}>
                                    <FontAwesomeIcon icon={faWindowClose} size="lg" style={{ color: "#000", margin: "15px" }} onClick={() => this.props.onClose(index)} />
                                    <Card.Body>
                                        {planetImg(data.name)}
                                        <Card.Title className="card-title">{data.name}</Card.Title>
                                        <p className="mb-2 mt-2 " style={{ fontSize: "1.1rem" }}>Distance - <span className="text-muted">{data.distance} megamiles</span></p>
                                    </Card.Body>
                                </Card>
                            </Col>

                        )
                        }

                    </Row>

                    {Object.keys(this.props.selectedPlanets).length === 4 &&
                        <Link to="/tab3" style={{ textDecoration: "none" }}><button type="button" className="nextButton"  >Next <FontAwesomeIcon icon={faChevronCircleRight} /></button></Link>
                    }

                </Container>
                <div className="footer">
                    <p >Coding Problem Statement: <a href="https://www.geektrust.in/coding-problem/frontend/space" rel="no_popper">https://www.geektrust.in/coding-problem/frontend/space</a></p>
                    <p >Designed & Developed by <a href="https://jaydeepdave.me/" rel="noreferrer" target="_blank">Jaydeep Dave</a></p>
                </div>

            </div >

        );
    };
}

export default Tab2;