import React from 'react';
import { Card } from 'react-bootstrap';
import vehicleImg from '../Images/vehicle.js';

class PlanetCard extends React.Component {
    render() {
        return (
            <Card className="text-center mt-5 mb-5" style={{ borderRadius: "1.6rem" }}>
                <Card.Body>
                    {vehicleImg(this.props.data.name)}
                    <Card.Title className="card-title">{this.props.data.name}</Card.Title>
                    <p className="mb-2 mt-2 " style={{ fontSize: "1.1rem" }}>Max Distance - <span className="text-muted">{this.props.data.max_distance} megamiles</span></p>
                    <p className="mb-2 mt-2 " style={{ fontSize: "1.1rem" }}>Speed - <span className="text-muted">{this.props.data.speed} megamiles/hour</span></p>
                    <p className="mb-2 mt-2 " style={{ fontSize: "1.1rem" }}>Total no. - <span className="text-muted">{this.props.data.total_no}</span></p>
                </Card.Body>
            </Card>
        );
    };
}
export default PlanetCard;