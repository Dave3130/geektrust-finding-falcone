import React from 'react';
import PropTypes from 'prop-types';
import { Link } from "react-router-dom";
import { Container, Row, Col } from 'react-bootstrap';
import VehicleCard from './VehicleCard.js';
import { tab3 as Data } from '../Data';
import TopButtons from '../TopButtons';
import Footer from '../Footer';
import Button from '../RoundButton';

class Tab3 extends React.Component {

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
            fontFamily: "'Audiowide', cursive",
            color: "#fff",
            letterSpacing: "0.05rem",
            fontSize: "1.5rem",
            textAlign: "center",
            margin: "2rem auto",
        }
        return (
            <div className="hero" >
                <Container fluid={true}>

                    <TopButtons url='/tab2' />
                    <p style={heading}>{Data.statement1}</p>

                    <Row noGutters={true} style={{ marginTop: "1rem", marginBottom: "3rem" }}>
                        {this.props.vehicles && this.props.vehicles.map((data, vehicleIndex) =>
                            <Col xs={12} sm={6} md={4} lg={3} className="col" key={vehicleIndex}>
                                <VehicleCard data={data} />
                            </Col>
                        )}
                    </Row>
                    <p style={statement}>{Data.statement2}</p>
                    <Link to="/tab4" style={{ textDecoration: "none" }}>
                        <Button value="Choose Vehicles" className="button" />
                    </Link>
                </Container>
                <Footer />
            </div >

        );
    };
}
Tab3.propTypes = {
    vehicles: PropTypes.array,
};

export default Tab3;