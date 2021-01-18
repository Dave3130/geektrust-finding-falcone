import React from 'react';
import planetImg from '../Images/planet.js';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Col, Card } from 'react-bootstrap';
import { faWindowClose } from '@fortawesome/free-solid-svg-icons'

class SelectedPlanets extends React.Component {
    render() {
        const closeIcon = {
            color: "#000",
            margin: "15px"
        };
        const card = {
            borderRadius: "1.6rem",
        };
        const distance = {
            fontSize: "1.1rem",
        };


        return (
            <>
                {this.props.data &&
                    this.props.data.map((data, index) =>
                        <Col xs={12} sm={6} md={4} lg={3} className="col" key={index}>
                            <Card className="text-center mt-5 mb-5" style={card} data-testid="planet">
                                <FontAwesomeIcon icon={faWindowClose} size="lg" style={closeIcon} onClick={() => this.props.close(index)} />
                                <Card.Body>
                                    {planetImg(data.name)}
                                    <Card.Title className="card-title" data-testid="title">{data.name}</Card.Title>
                                    <p className="mb-2 mt-2 " style={distance}>Distance - <span className="text-muted">{data.distance} megamiles</span></p>
                                </Card.Body>
                            </Card>
                        </Col>

                    )
                }
            </>
        );
    }
}

export default SelectedPlanets;