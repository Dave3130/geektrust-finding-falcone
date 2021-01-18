import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import { Link } from "react-router-dom";
import { gsap, Power4 } from "gsap";
import Planet1 from "../assests/planet1.svg";
import Planet2 from "../assests/planet2.svg";
import Falcon from "../assests/falcon.svg";
import Spaceship from "../assests/spaceship.svg";
import Star1 from "../assests/star1.svg";
import Star2 from "../assests/star2.svg";
import Star3 from "../assests/star3.svg";
import Footer from '../Footer';
import Button from '../RoundButton';
import { homePage as Data } from '../Data';

class Homepage extends React.Component {
    componentDidMount() {

        var tl = gsap.timeline();
        tl.to(".planet", { y: -15, duration: 1.5, ease: "elastic" })
            .to(".spaceship", { opacity: 1, y: -75, x: -75, duration: 2.5, ease: Power4.easeOut }, "-=1")
            .to(".falcon", { opacity: 1, y: -75, x: -75, duration: 1, ease: Power4.easeOut }, "-=1.5");
    }

    render() {
        return (
            <div>
                <Container fluid={true} style={{ paddingBottom: "5.5rem" }}>
                    <Row noGutters={true}>
                        <Col xs={{ span: 12, order: 2 }} sm={{ span: 6, order: 1 }} md={{ span: 6, order: 1 }} lg={{ span: 6, order: 1 }} >
                            <p className="title">
                                {Data.title1}
                                <span style={{ color: "#FEF609" }}>{Data.title2}</span>
                                {Data.title3}
                            </p>
                            <p className="subtitle">{Data.subTitle}</p>
                            <Link to="/tab1" style={{ textDecoration: "none" }}>
                                <Button value="Enter" className="button" />
                            </Link>
                        </Col>
                        <Col xs={{ span: 12, order: 1 }} sm={{ span: 6, order: 2 }} md={{ span: 6, order: 2 }} lg={{ span: 6, order: 2 }} className="col-2" >
                            <Image src={Planet1} className="planet1" />
                            <Image src={Falcon} className="falcon" />
                            <Image src={Planet2} className="planet2" />
                            <Image src={Spaceship} className="spaceship" />
                            <Image src={Star1} className="star1" />
                            <Image src={Star2} className="star2" />
                            <Image src={Star3} className="star3" />
                        </Col>
                    </Row>
                </Container>
                <Footer />
            </div>
        );
    }
}

export default Homepage;
