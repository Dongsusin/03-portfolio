import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import siteimg1 from "../assets/img/pokemon.png";
import siteimg2 from "../assets/img/neo.png";
import siteimg3 from "../assets/img/kakao.png";
import siteimg4 from "../assets/img/seven.png";
import gameimg1 from "../assets/img/speed.png";
import gameimg2 from "../assets/img/search.png";
import gameimg3 from "../assets/img/tetris.png";
import gameimg4 from "../assets/img/2048.png";
import soloimg1 from "../assets/img/weather.png";
import soloimg2 from "../assets/img/change.png";
import soloimg3 from "../assets/img/pokedex.png";
import soloimg4 from "../assets/img/todolist.png";
import soloimg5 from "../assets/img/protfolio.png";
import soloimg6 from "../assets/img/calculator.png";
import mile from "../assets/img/밀리의서재.png";
import "animate.css";
import TrackVisibility from "react-on-screen";

export const Projects = () => {
  //첫번째 프로젝트 배열
  const firstprojects = [
    {
      title: "Pokemon",
      imgUrl: siteimg1,
      url: "https://dongsusin.github.io/pokemon/",
      githuburl: "https://github.com/Dongsusin/pokemon",
    },
    {
      title: "Neowiz",
      imgUrl: siteimg2,
      url: "https://dongsusin.github.io/neowiz/",
      githuburl: "https://github.com/Dongsusin/neowiz",
    },
    {
      title: "Kakao",
      imgUrl: siteimg3,
      url: "https://dongsusin.github.io/kakao/",
      githuburl: "https://github.com/Dongsusin/kakao",
    },
    {
      title: "세븐나이츠",
      imgUrl: siteimg4,
      url: "https://stalwart-granita-3bb4c2.netlify.app/",
      githuburl: "https://dongsusin.github.io/seven/",
    },
    {
      title: "밀리의 서재",
      imgUrl: mile,
      url: "https://9rodigital-willie.netlify.app/",
      githuburl: "https://github.com/FRONTENDBOOTCAMP-13th/9RoDigital",
    },
  ];
  //두번째 프로젝트 배열
  const secondprojects = [
    {
      title: "반응속도 테스트",
      imgUrl: gameimg1,
      url: "https://dongsusin.github.io/speed/",
      githuburl: "https://github.com/Dongsusin/speed",
    },
    {
      title: "지뢰찾기",
      imgUrl: gameimg2,
      url: "https://dongsusin.github.io/search/",
      githuburl: "https://github.com/Dongsusin/search",
    },
    {
      title: "테트리스",
      imgUrl: gameimg3,
      url: "https://dongsusin.github.io/tetris/",
      githuburl: "https://github.com/Dongsusin/tetris",
    },
    {
      title: "2048",
      imgUrl: gameimg4,
      url: "https://dongsusin.github.io/2048/",
      githuburl: "https://github.com/Dongsusin/2048",
    },
  ];
  //세번째 프로젝트 배열
  const thirdprojects = [
    {
      title: "날씨GPS",
      imgUrl: soloimg1,
      url: "https://dongsusin.github.io/weather/",
      githuburl: "https://github.com/Dongsusin/weather",
    },
    {
      title: "환률계산기",
      imgUrl: soloimg2,
      url: "https://dongsusin.github.io/adjustment/",
      githuburl: "https://github.com/Dongsusin/adjustment",
    },
    {
      title: "포켓몬API도감",
      imgUrl: soloimg3,
      url: "https://dongsusin.github.io/pokemon-pokedex/",
      githuburl: "https://github.com/Dongsusin/pokemon-pokedex",
    },
    {
      title: "To-Do-List",
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
    {
      title: "계산기",
      imgUrl: soloimg6,
      url: "https://dongsusin.github.io/calculator/",
      githuburl: "https://github.com/Dongsusin/calculator",
    },
  ];
  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__fadeIn" : ""
                  }
                >
                  <h2>Projects</h2>
                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Nav
                      variant="pills"
                      className="nav-pills mb-5 justify-content-center align-items-center"
                      id="pills-tab"
                    >
                      <Nav.Item>
                        <Nav.Link eventKey="first">Site</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="second">Game</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="third">toi project</Nav.Link>
                      </Nav.Item>
                    </Nav>
                    <Tab.Content
                      id="slideInUp"
                      className={
                        isVisible ? "animate__animated animate__slideInUp" : ""
                      }
                    >
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
                      <Tab.Pane eventKey="third">
                        <Row className="row-skill">
                          {thirdprojects.map((project, index) => {
                            return <ProjectCard key={index} {...project} />;
                          })}
                        </Row>
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
