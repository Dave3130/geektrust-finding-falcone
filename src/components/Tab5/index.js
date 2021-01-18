import React from 'react';
import PropTypes from 'prop-types';
import { Link } from "react-router-dom";
import { Container, Row, Col, Card, Image, Spinner } from 'react-bootstrap';
import error from '../assests/noData.svg';
import Success from './Success';
import NotFound from './NotFound';
import Error from './Error';
import Button from '../RoundButton';
import Footer from '../Footer';

class Tab5 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            delay: true,
        }
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick() {
        this.props.clear();
    }

    render() {
        return (
            <div className="hero" >
                <Container fluid={true}>

                    <Row noGutters={true} style={{ marginTop: "1rem", marginBottom: "3rem" }}>

                        <Col xs={12} sm={12} md={12} lg={12} className="col">
                            <Card className="text-center mt-5 mb-5" style={{ borderRadius: "1.6rem", width: "90%" }}>
                                <Card.Body>
                                    {this.props.selectedPlanets && Object.keys(this.props.selectedPlanets).length === 4 && Object.keys(this.props.selectedVehicles).length === 4 ?
                                        <>
                                            <Card.Title style={{ fontSize: "1.8rem" }}>Result</Card.Title>
                                            {
                                                Object.keys(this.props.res).length === 2 ?
                                                    <Success time={this.props.time} res={this.props.res} />
                                                    :
                                                    Object.keys(this.props.res).length === 1 && this.props.res.status ?
                                                        <NotFound />
                                                        :
                                                        Object.keys(this.props.res).length === 1 && this.props.res.error ?
                                                            <Error />
                                                            :
                                                            <>
                                                                <Spinner animation="border" variant="danger" style={{ margin: "3rem" }} />
                                                            </>
                                            }
                                        </>

                                        :
                                        <div className="text-center mt-5 mb-5" >
                                            <Image src={error} alt="no data" className="mb-2" style={{ width: "15rem" }} />
                                            <h4 style={{ color: "#000", fontFamily: "'Inknut Antiqua', serif" }}>No Data Found !!</h4>

                                        </div>
                                    }
                                </Card.Body>

                                <div onClick={this.handleClick}>
                                    <Link to="/" style={{ textDecoration: "none" }}>
                                        <Button value="Try Again" className="button" />
                                    </Link>
                                </div>
                            </Card>

                        </Col>
                    </Row>

                </Container>
                <Footer />

            </div >

        );
    };
}

Tab5.propTypes = {
    selectedPlanets: PropTypes.array,
    selectedVehicles: PropTypes.array,
};


export default Tab5;