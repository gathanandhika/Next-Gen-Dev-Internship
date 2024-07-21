import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import skill1 from "../assets/img/icon-laravel.svg";
import skill2 from "../assets/img/icon-react.svg";
import skill3 from "../assets/img/icon-php.svg";
import skill4 from "../assets/img/icon-js.svg";
import skill5 from "../assets/img/icon-css.svg";
import skill6 from "../assets/img/icon-html.svg";
import skill7 from "../assets/img/icon-figma.svg";
import skill8 from "../assets/img/icon-photoshop.svg";

const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <section className="skill" id="skills">
      <Container>
        <Row>
          <Col md={6}>
              <div className="skill-bx">
                <h2>Captivating <span class="highlight">stories</span> about Nnath.</h2>
                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Ratione velit praesentium iure, voluptatibus quo quidem rerum?
                  Laboriosam odio, tempora atque, assumenda, voluptatem dicta
                  nisi asperiores in recusandae error dolores mollitia.
                </p>
              </div>
              <div className='details'>
                <div className="details-activity">
                    <h2> 1+ </h2>
                    <span>Year as <br/> Freelancer </span>
                </div>
                <div className="details-activity">
                    <h2> 20 </h2>
                    <span>Projects <br/> Completed</span>
                </div>
                <div className="details-activity">
                    <h2> 5  </h2>
                    <span> Technology <br/> Skills</span>
                </div>
              </div>
          </Col>
          <Col md={6}>
              <div className="skill-bx">
                <h3><span className="highlight"> Skills </span></h3>
                <p>
                  Web Development
                </p>
                <Carousel
                  responsive={responsive}
                  infinite={true}
                  className="owl-carousel carousel-theme skill-slider"
                  autoPlay={true}
                  autoPlaySpeed={3000}
                  arrows={false}
                  containerClass="carousel-container"
                >
                  {/* Daftar item carousel */}
                  <div className="item">
                    <a href="#">
                      <img src={skill1} alt=""/>
                    </a>
                  </div>
                  <div className="item">
                    <a href="#">
                      <img src={skill2} alt="" />
                    </a>
                  </div>
                  <div className="item">
                    <a href="#">
                      <img src={skill3} alt="" />
                    </a>
                  </div>
                  <div className="item">
                    <a href="#">
                      <img src={skill4} alt="" />
                    </a>
                  </div>
                  <div className="item">
                    <a href="#">
                      <img src={skill5} alt="" />
                    </a>
                  </div>
                  <div className="item">
                    <a href="#">
                      <img src={skill6} alt="" />
                    </a>
                  </div>

                </Carousel>
                <p>
                  UI/UX Design
                </p>
                <Carousel
                  responsive={responsive}
                  infinite={true}
                  className="owl-carousel carousel-theme skill-slider"
                  autoPlay={true}
                  autoPlaySpeed={2000}
                  arrows={false}
                  containerClass="carousel-container"
                >
                  <div className="item">
                    <a href="#">
                      <img src={skill7} alt="" />
                    </a>
                  </div>
                  <div className="item">
                    <a href="#">
                      <img src={skill8} alt="" />
                    </a>
                  </div>
                </Carousel>
              </div>
          </Col>
        </Row>
      </Container>
    </section>

  );
};

export default Skills;
