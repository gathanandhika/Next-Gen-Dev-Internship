import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { FaRegCopyright } from "react-icons/fa";


const Footer = () => {
    return (
        <footer className="footer">
            <Container>
                <Row className='text-center'>
                <Col>
                <p> <FaRegCopyright /> NNath Gathan | Copyright 2024 </p>
                </Col>
                </Row>
            </Container>
        </footer>
    )
}

export default Footer;