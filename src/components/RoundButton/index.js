import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronCircleRight } from '@fortawesome/free-solid-svg-icons';


class Button extends React.Component {
    render() {
        const btn = {
            borderRadius: "30px",
            backgroundColor: "#fc6A03",
            border: "1.5px solid #fff",
            fontFamily: "'Audiowide', cursive",
            fontSize: "1.1rem",
            color: "#fff",
            width: "auto",
            height: "auto",
            margin: "4rem auto",

            padding: "0.5rem 0.8rem",
            display: "block",
        }

        return (

            <button data-testid="button" type="button" style={btn} >{this.props.value} <FontAwesomeIcon icon={faChevronCircleRight} /></button>

        );
    }
}

Button.propTypes = {
    value: PropTypes.element.isRequired,
    value: PropTypes.string
};

export default Button;