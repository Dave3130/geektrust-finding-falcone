import React from 'react';
import { Image } from 'react-bootstrap';
import error from '../assests/noData.svg';

class Error extends React.Component {
    render() {
        const style = {
            fontFamily: "'Audiowide', cursive",
            color: "Red",
            fontSize: "1.35rem"
        };
        const img = {
            width: "10rem",
        }
        return (
            <>
                <Image src={error} alt="error" style={img} />
                <p style={style}>Error !!</p>
                <p style={style}>Some Error Occurred.</p>
            </>
        );
    }
}

export default Error;