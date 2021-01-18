import React from 'react';
import { Link } from 'react-router-dom';
import { Badge } from 'react-bootstrap';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronCircleLeft } from '@fortawesome/free-solid-svg-icons'

class TopButtons extends React.Component {
    render() {
        const style = {
            display: "flex",
            justifyContent: "space-between"
        }
        const link = {
            textDecoration: "none",
        }
        const badge = {
            background: "#fc6A03",
            color: "#fff",
            fontFamily: "'Inknut Antiqua', serif"
        }

        return (
            <span style={style}>
                <Link to={this.props.url} style={link}><Badge style={badge} className="ml-3 mt-4 py-2 px-3" ><FontAwesomeIcon icon={faChevronCircleLeft} /> Back</Badge></Link>
                <a href="https://github.com/Dave3130/geektrust-finding-falcone" rel="noreferrer" target="_blank" style={{ textDecoration: "none" }}><Badge style={badge} className="mr-3 mt-4 py-2 px-3" >Github </Badge></a>
            </span>

        );
    }
}

TopButtons.propTypes = {
    url: PropTypes.element.isRequired,
    url: PropTypes.string,
};


export default TopButtons;