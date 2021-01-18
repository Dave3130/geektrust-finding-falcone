import React from 'react';
import { Card, Dropdown } from 'react-bootstrap';
import planetImg from '../Images/planet.js';

class VehicleCard extends React.Component {
    render() {

        const text = {
            fontFamily: "'Inknut Antiqua', serif",
            fontSize: "0.8rem",
            fontWeight: "500"
        }
        const distance = {
            fontSize: "1.1rem",
        }
        return (
            <Card className="text-center mt-5 mb-5" style={{ borderRadius: "1.6rem" }}>
                <Card.Body>
                    {planetImg(this.props.data.name)}
                    <Card.Title style={distance}>{this.props.data.name}</Card.Title>
                    <p className="mb-2 mt-2 " style={text}>Distance - <span className="text-muted">{this.props.data.distance} megamiles</span></p>

                    <Dropdown className="mt-2" >
                        <Dropdown.Toggle variant="success" id="dropdown-basic" style={text}>
                            {Object.keys(this.props.selectedVehicles[this.props.planetIndex]).length === 0 ? "Select" : this.props.selectedVehicles[this.props.planetIndex].data.name}
                        </Dropdown.Toggle>

                        <Dropdown.Menu>
                            {this.props.vehicles.map((vehicle, vehicleIndex) =>
                                vehicle.max_distance >= this.props.data.distance && vehicle.total_no > 0 ?
                                    <Dropdown.Item style={text} key={vehicleIndex} onClick={(e) => this.props.click(vehicleIndex, this.props.planetIndex)}>{vehicle.name} ({vehicle.total_no})</Dropdown.Item>
                                    :
                                    <Dropdown.Item key={vehicleIndex} style={text} disabled="true" >{vehicle.name} ({vehicle.total_no})</Dropdown.Item>
                            )}
                        </Dropdown.Menu>

                    </Dropdown>
                </Card.Body>


            </Card>
        );
    };
}

export default VehicleCard;