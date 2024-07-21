import Nav from 'react-bootstrap/Nav';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Tab from 'react-bootstrap/Tab';
import ProjectCard from './ProjectsCard';
import Proj1 from "../assets/img/MSCAPP.png";
import Proj2 from "../assets/img/IMMUNIZATION.png";
import Proj3 from "../assets/img/UTY.png";
import Proj4 from "../assets/img/ATHEENE.png";
import Proj5 from "../assets/img/ECYCLE.png";
import Proj6 from "../assets/img/PLUSSEHAT.png";


const Projects = () => {
    const projects = [
        {
            title: "Sport Centre Reservation (MSC)",
            description: "Web Mobile Development",
            imgUrl:Proj1
        },
        {
            title: "E-Immunization Application System",
            description: "Web Mobile Development",
            imgUrl:Proj2
        },
        {
            title: "Re-Design UTY Official Website",
            description: "Web Mobile Development",
            imgUrl:Proj3
        },
        {
            title: "Atheene Sign-Up Flow",
            description: "UI/UX Design",
            imgUrl:Proj4
        },
        {
            title: "E-Cycle Design",
            description: "UI/UX Design",
            imgUrl:Proj5
        },
        {
            title: "PlusSehat Application",
            description: "Web Mobile Development",
            imgUrl:Proj6
        },
    ]

    return (
        <section className="project" id="project">
            <Container>
                <Row>
                    <Col>
                    <h2> Projects </h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe, ea quos. Voluptatum ducimus aliquam repellendus impedit sit error hic eligendi dignissimos excepturi at, nobis ipsa necessitatibus, nostrum sequi quasi officia?</p>
                    <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Nav variant="pills" className='nav-pills mb-5 justify-content-center align-items-center' id='pills-tab' >
                    <Nav.Item>
                        <Nav.Link eventKey={"first"}>Tab One</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey={"second"}>Tab Two</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey={"third"}> Tab Three</Nav.Link>
                    </Nav.Item>
                    </Nav>
                    <div className='project-content'>
                    <Tab.Content>
                        <Tab.Pane eventKey="first">
                            <Row>
                                {
                                    projects.map((project, index) => {
                                        return (
                                            <ProjectCard key={index} {...project} />
                                        )
                                    })
                                }
                            </Row>
                        </Tab.Pane>
                        <Tab.Pane eventKey="secoond"> Lorem Ipsum </Tab.Pane>
                        <Tab.Pane eventKey="third"> Lorem Ipsum </Tab.Pane>
                    </Tab.Content>
                    </div>
                    </Tab.Container>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default Projects;