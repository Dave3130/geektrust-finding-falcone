import React from 'react';
import PropTypes from 'prop-types';
import { Link } from "react-router-dom";
import { Container, Row, Col, Badge } from 'react-bootstrap';
import vehicleImg from '../Images/vehicle.js';
import VehicleCard from './VehicleCard.js';
import NoData from './NoData.js';
import Footer from '../Footer';
import Button from '../RoundButton';
import TopButtons from '../TopButtons';
import { tab4 as Data } from '../Data';

class Tab4 extends React.Component {

    render() {
        const heading = {
            fontFamily: "'Audiowide', cursive",
            color: "#fff",
            letterSpacing: "0.05rem",
            fontSize: "1.5rem",
            textAlign: "center",
            margin: "2rem auto",
        };
        const badge = {
            background: "#fc6A03",
            color: "#fff",
            fontFamily: "'Inknut Antiqua', serif",
            fontSize: "1.2rem",
        };

        return (
            <div className="hero" >
                <Container fluid={true}>

                    {this.props.selectedPlanets && Object.keys(this.props.selectedPlanets).length > 0 ? (
                        <>
                            <TopButtons url='/tab3' />
                            <p style={heading}>{Data.statement1}</p>
                            <h3 className="text-center">
                                <Badge style={badge} className="py-2 px-3">Total Time: {this.props.timeTaken}</Badge>
                            </h3>

                            <Row noGutters={true} style={{ marginTop: "1rem", marginBottom: "3rem" }}>
                                {this.props.selectedPlanets && this.props.selectedPlanets.map((data, planetIndex) =>

                                    <Col xs={12} sm={6} md={4} lg={3} className="col" key={planetIndex}>
                                        <>
                                            <VehicleCard data={data} planetIndex={planetIndex} selectedVehicles={this.props.selectedVehicles} vehicles={this.props.vehicles} click={this.props.onClick} />
                                            {
                                                Object.keys(this.props.selectedVehicles[planetIndex]).length !== 0 &&
                                                vehicleImg(this.props.selectedVehicles[planetIndex].data.name)
                                            }
                                        </>
                                    </Col>

                                )}
                            </Row>
                            {this.props.selectedVehicles[0].data && this.props.selectedVehicles[1].data && this.props.selectedVehicles[2].data && this.props.selectedVehicles[3].data &&
                                <div onClick={this.props.find}>
                                    <Link to="/tab5" style={{ textDecoration: "none" }}>
                                        <Button value="Find Falcone" className="button" />
                                    </Link>
                                </div>
                            }

                            <Footer />
                        </>
                    )
                        :
                        <NoData />
                    }

                </Container>


            </div >

        );
    };
}

Tab4.propTypes = {
    vehicles: PropTypes.array,
    selectedPlanets: PropTypes.array,
    selectedVehicles: PropTypes.array,
    timeTaken: PropTypes.number,
    onClick: PropTypes.func,
    find: PropTypes.func
};
export default Tab4;