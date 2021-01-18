import React from 'react';
import { Image } from 'react-bootstrap';
import error from '../assests/noData.svg';

class NotFound extends React.Component {
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
                <p style={style}>Not Found !!</p>
                <p style={style}>Don't Loose hope.</p>
            </>
        );
    }
}

export default NotFound;