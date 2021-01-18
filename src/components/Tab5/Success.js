import React from 'react';
import { Image } from 'react-bootstrap';
import success from '../assests/success.svg';

class Success extends React.Component {
    render() {
        const style = {
            color: "#fff",
            fontFamily: "'Inknut Antiqua', serif",
        }
        const img = {
            width: "20rem",
        }
        return (
            <>
                <Image src={success} alt="success" style={{ width: "10rem" }} />
                <p style={{ fontFamily: "'Audiowide', cursive", color: "green", fontSize: "1.35rem" }}>Success !!</p>
                <p style={{ fontFamily: "'Audiowide', cursive", fontSize: "1.35rem" }}>Congratulations on Finding Falcone. King Shan is mighty pleased</p>
                <p style={{ fontFamily: "'Audiowide', cursive", fontSize: "1.35rem" }}>Time Taken: {this.props.time}</p>
                <p style={{ fontFamily: "'Audiowide', cursive", fontSize: "1.35rem" }}>Found on planet: {this.props.res.planet_name}</p>
            </>
        );
    }
}

export default Success;