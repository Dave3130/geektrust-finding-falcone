import React from 'react';
import PropTypes from 'prop-types';
import { Image } from 'react-bootstrap';
import './style.css';
import Planet1 from '../assests/planet1.svg';
import donlon from '../assests/donlon.svg';
import enchai from '../assests/enchai.svg';
import jebing from '../assests/jebing.svg';
import sapir from '../assests/sapir.svg';
import lerbin from '../assests/lerbin.svg';
import pingasor from '../assests/pingasor.svg';

class planetAnimation extends React.Component {
    render() {

        return (

            <div id="wrapper">
                <Image src={Planet1} id="center" />
                <Image src={donlon} id="donlon" className="planet" onClick={(e) => this.props.click(0)} />
                <Image src={enchai} id="enchai" className="planet" onClick={(e) => this.props.click(1)} />
                <Image src={jebing} id="jebing" className="planet" onClick={(e) => this.props.click(2)} />
                <Image src={sapir} id="sapir" className="planet" onClick={(e) => this.props.click(3)} />
                <Image src={lerbin} id="lerbin" className="planet" onClick={(e) => this.props.click(4)} />
                <Image src={pingasor} id="pingasur" className="planet" onClick={(e) => this.props.click(5)} />
            </div>
        );
    }
}

planetAnimation.propTypes = {
    click: PropTypes.func
};


export default planetAnimation;