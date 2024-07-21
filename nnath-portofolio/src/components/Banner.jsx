import { useState, useEffect } from 'react';
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import headerImg from "../assets/img/person-home.png";

const Banner = () => {
    const [loopNum, setLoopNum] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const toRotate = ["Web Developer.", "UI/UX Designer", "Graphic Designer"];
    const [text, setText] = useState('');
    const [delta, setDelta] = useState(300 - Math.random() * 100);
    const period = 2000;

    useEffect(() => {
        let ticker = setInterval(() => {
            tick();
        }, delta)

        return () => clearInterval(ticker);
    }, [text])

    const tick = () => {
        let i = loopNum % toRotate.length;
        let fullText = toRotate[i];
        let updatedText;
    
        if (isDeleting) {
            updatedText = fullText.substring(0, text.length - 1);
        } else {
            updatedText = fullText.substring(0, text.length + 1);
        }
    
        setText(updatedText);
    
        if (isDeleting && updatedText === '') {
            setIsDeleting(false);
            setLoopNum(loopNum + 1);
            setDelta(500); // Set delta for next iteration
        }
    
        if (!isDeleting && updatedText === fullText) {
            setIsDeleting(true);
            setDelta(150);
        }
    };
    

    
    return (
        <section className="banner" id="home">
            <Container>
                <Row className="align-items-center">
                    <Col xs={12} md={6} xl={7}>
                        <h1>{"I'm, Nnath Gathan"} <span className="wrap"> {text} </span></h1>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Totam tempore odio explicabo rerum dignissimos ipsa quibusdam, quidem porro debitis neque velit vitae obcaecati, eius blanditiis impedit quae sed! Optio, consequuntur.</p>
                        <button onClick={() => console.log('connect')}>Let's talk. </button>
                    </Col>
                    <Col xs={12} md={6} xl={5}>
                        <img src={headerImg} alt="Header Image" />
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default Banner;
