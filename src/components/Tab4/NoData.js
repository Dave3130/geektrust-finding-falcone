import React from 'react';
import { Link } from 'react-router-dom';
import { Image } from 'react-bootstrap';
import noData from '../assests/noData.svg';
import Footer from '../Footer';

class NoData extends React.Component {
    render() {
        const style = {
            color: "#fff",
            fontFamily: "'Inknut Antiqua', serif",
        }
        const img = {
            width: "20rem",
        }
        return (
            <div className="text-center mt-5 mb-5" >
                <Image src={noData} alt="no data" className="mb-2" style={img} />
                <h4 style={style}>No Data Found !!</h4>
                <h5 style={style} className="mt-3">Please <Link to="/tab2" >click</Link> here to select Planets</h5>
                <Footer />
            </div>
        );
    }
}

export default NoData;