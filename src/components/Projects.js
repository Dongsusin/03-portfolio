import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import mainimg1 from "../assets/img/seven.png";
import soloimg1 from "../assets/img/weather.png";
import soloimg2 from "../assets/img/musicplayer-preview.png";
import soloimg3 from "../assets/img/pokedex.png";
import soloimg4 from "../assets/img/todolist.png";
import soloimg5 from "../assets/img/protfolio.png";
import mile from "../assets/img/밀리의서재.png";
import TrackVisibility from "react-on-screen";

export const Projects = () => {
  //첫번째 프로젝트 배열
  const firstprojects = [
    {
      title: "밀리의 서재",
      imgUrl: mile,
      url: "https://9rodigital-willie.netlify.app/",
      githuburl: "https://github.com/FRONTENDBOOTCAMP-13th/9RoDigital",
    },
    {
      title: "날씨GPS",
      imgUrl: soloimg1,
      url: "https://dongsusin.github.io/weather/",
      githuburl: "https://github.com/Dongsusin/weather",
    },
    {
      title: "뮤직플레이어",
      imgUrl: soloimg2,
      url: "https://dongsusin.github.io/music-player/",
      githuburl: "https://github.com/Dongsusin/music-player",
    },
    {
      title: "포켓몬API도감",
      imgUrl: soloimg3,
      url: "https://dongsusin.github.io/pokemon-pokedex/",
      githuburl: "https://github.com/Dongsusin/pokemon-pokedex",
    },
    {
      title: "TO-DO-LIST",
      imgUrl: soloimg4,
      url: "https://dongsusin.github.io/todolist/",
      githuburl: "https://github.com/Dongsusin/todolist",
    },
    {
      title: "포트폴리오",
      imgUrl: soloimg5,
      url: "https://dongsusin.github.io/portfolio/",
      githuburl: "https://github.com/Dongsusin/portfolio",
    },
  ];
  //두번째 프로젝트 배열
  const secondprojects = [
    {
      title: "세븐나이츠",
      imgUrl: mainimg1,
      url: "https://stalwart-granita-3bb4c2.netlify.app/",
      githuburl: "https://dongsusin.github.io/seven/",
    },
  ];
  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              <div>
                <h2>Projects</h2>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav
                    variant="pills"
                    className="nav-pills mb-5 justify-content-center align-items-center"
                    id="pills-tab"
                  >
                    <Nav.Item>
                      <Nav.Link eventKey="first">toi project</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">main project</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp">
                    <Tab.Pane eventKey="first">
                      <Row className="row-skill">
                        {firstprojects.map((project, index) => {
                          return <ProjectCard key={index} {...project} />;
                        })}
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                      <Row className="row-skill">
                        {secondprojects.map((project, index) => {
                          return <ProjectCard key={index} {...project} />;
                        })}
                      </Row>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
