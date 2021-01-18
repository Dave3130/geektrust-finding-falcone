import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import { Link } from "react-router-dom";
import king from '../assests/king.gif';
import queen from '../assests/queen.gif';
import TopButtons from '../TopButtons';
import Footer from '../Footer';
import Button from '../RoundButton';
import { tab1 as Data } from '../Data';

class Tab1 extends React.Component {

    render() {
        const statement = {
            color: "#fff",
            fontFamily: "'Audiowide', cursive",
            letterSpacing: "0.05rem",
            fontSize: "1.25rem",
            textAlign: "center",
            margin: "2rem",
        };
        const heading = {
            fontFamily: "'Inknut Antiqua', serif",
            color: "#FEF609",
            fontSize: "1.5rem"
        };
        const img = {
            width: "15rem",
            borderRadius: "2rem",
        }

        return (
            <div>
                <TopButtons url='/' />
                <p style={statement}>{Data.statement1}</p>

                <Container fluid={true}>
                    <Row noGutters={true} style={{ marginTop: "3rem", marginBottom: "3rem" }}>
                        <Col xs={12} sm={12} md={6} lg={6} className="col">
                            <div>
                                <Image src={king} alt="king" className="vehicleLogo" style={img} />
                                <p style={heading} className="mt-2 text-center">King Shan</p>
                            </div>
                        </Col>
                        <Col xs={12} sm={12} md={6} lg={6} className="col">
                            <div>
                                <Image src={queen} alt="queen" className="vehicleLogo" style={img} />
                                <p style={heading} className="mt-2 text-center">Queen AI Falcone</p>
                            </div>
                        </Col>
                    </Row>
                </Container>

                <p style={statement}>{Data.statement2}</p>
                <Link to="/tab2" style={{ textDecoration: "none" }}>
                    <Button value="Select Planets" className="button" />
                </Link>

                <Footer />

            </div >

        );
    };
}

export default Tab1;