import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import {BsLinkedin} from "react-icons/bs";
import {BsGithub} from "react-icons/bs";
import {IoIosMail} from "react-icons/io";
import { FaCloudDownloadAlt } from "react-icons/fa";



const Contact = () => {
  return (
    <section className="skill" id="skills">
      <Container>
        <Row>
          <Col md={6}>
              <div className="skill-bx">
                <h2> <span class="highlight"> Contact </span> </h2>
                <h2> GET IN TOUCH</h2>
                <button onClick={() => console.log('resume')}> Resume<FaCloudDownloadAlt /> </button>
              </div>
          </Col>
          <Col md={6}>
              <div className="skill-bx">
                <h3><span className="highlight"></span></h3>
                <div className="contact-us">
                    <a href="">
                        <BsLinkedin />
                        linkedin.com/in/gathanafrr/
                    </a>
                    <a href="">
                        <BsGithub />
                        github.com/gathanandhika
                    </a>
                    <a href="">
                        <IoIosMail />
                        gathanafrr@gmail.com
                    </a>
                </div>
              </div>
          </Col>
        </Row>
      </Container>
    </section>

  );
};

export default Contact;
