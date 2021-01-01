import React from "react";
import "./style.css";
import { Link } from "react-router-dom";
import { Container, Row, Col, Image } from "react-bootstrap";
import { gsap, Power4 } from "gsap";
import Planet1 from "../assests/planet1.svg";
import Planet2 from "../assests/planet2.svg";
import Falcon from "../assests/falcon.svg";
import Spaceship from "../assests/spaceship.svg";
import Star1 from "../assests/star1.svg";
import Star2 from "../assests/star2.svg";
import Star3 from "../assests/star3.svg";

class Homepage extends React.Component {
    componentDidMount() {
        // use the node ref to create the animation
        var tl = gsap.timeline();
        tl.to(".planet1", { y: -15, duration: 1.5, ease: "elastic" })
            .to(
                ".spaceship",
                { opacity: 1, y: -75, x: -75, duration: 2.5, ease: Power4.easeOut },
                "-=1"
            )
            .to(
                ".falcon",
                { opacity: 1, y: -75, x: -75, duration: 1, ease: Power4.easeOut },
                "-=1.5"
            );
    }

    render() {
        return (
            <div>
                <Container fluid={true} style={{ paddingBottom: "5.5rem" }}>
                    <Row noGutters={true}>
                        <Col
                            xs={{ span: 12, order: 2 }}
                            sm={{ span: 6, order: 1 }}
                            md={{ span: 6, order: 1 }}
                            lg={{ span: 6, order: 1 }}
                        >
                            <p className="title">
                                Welcome to the <span style={{ color: "#FEF609" }}>planet</span>{" "}
                of Lengaburu !!
              </p>
                            <p className="subtitle">
                                Tighten your seatbelt and get ready for the misson
              </p>
                            <Link to="tab1/" style={{ textDecoration: "none" }}>
                                <button type="button" className="button">
                                    Enter
                </button>
                            </Link>
                        </Col>
                        <Col
                            xs={{ span: 12, order: 1 }}
                            sm={{ span: 6, order: 2 }}
                            md={{ span: 6, order: 2 }}
                            lg={{ span: 6, order: 2 }}
                            className="col-2"
                        >
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
                <div className="footer">
                    <p>
                        Coding Problem Statement:{" "}
                        <a
                            href="https://www.geektrust.in/coding-problem/frontend/space"
                            rel="no_popper"
                        >
                            https://www.geektrust.in/coding-problem/frontend/space
            </a>
                    </p>
                    <p>
                        Designed & Developed by{" "}
                        <a href="https://jaydeepdave.me/" rel="noreferrer" target="_blank">
                            Jaydeep Dave
            </a>
                    </p>
                </div>
            </div>
        );
    }
}

export default Homepage;
