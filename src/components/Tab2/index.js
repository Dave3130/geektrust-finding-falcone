import React from 'react';
import PropTypes from 'prop-types';
import { Link } from "react-router-dom";
import { Container, Row } from 'react-bootstrap';
import Footer from '../Footer';
import PlanetAnimation from './PlanetAnimation.js';
import SelectedPlanets from './SelectedPlanets.js';
import TopButtons from '../TopButtons';
import Button from '../RoundButton';
import { tab2 as Data } from '../Data';

class Tab2 extends React.Component {

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
            <>
                <TopButtons url='/tab1' />
                <p style={statement}>{Data.statement1}</p>
                <p style={heading}>{Data.statement2}</p>

                <PlanetAnimation click={this.props.onClick} />
                <Container fluid={true}>
                    <Row noGutters={true} style={{ marginTop: "2.6rem", marginBottom: "3rem" }}>
                        <SelectedPlanets data={this.props.selectedPlanets} close={this.props.onClose} />
                    </Row>

                    {this.props.selectedPlanets && Object.keys(this.props.selectedPlanets).length === 4 &&
                        <>
                            <p style={statement}>{Data.statement3}</p>
                            <Link to="/tab3" style={{ textDecoration: "none" }}>
                                <Button value="Next" className="button" />
                            </Link>

                        </>
                    }

                </Container>
                <Footer />

            </>

        );
    };
}

Tab2.propTypes = {
    planets: PropTypes.array,
    selectedPlanets: PropTypes.array,
    onClick: PropTypes.func,
    onClose: PropTypes.func
};

export default Tab2;