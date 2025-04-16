import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import siteimg1 from "../assets/img/pokemon.png";
import siteimg2 from "../assets/img/neo.png";
import siteimg3 from "../assets/img/kakao.png";
import siteimg4 from "../assets/img/kaist.png";
import siteimg5 from "../assets/img/nexon.png";
import gameimg1 from "../assets/img/speed.png";
import gameimg2 from "../assets/img/search.png";
import gameimg3 from "../assets/img/tetris.png";
import gameimg4 from "../assets/img/2048.png";
import soloimg1 from "../assets/img/weather.png";
import soloimg2 from "../assets/img/change.png";
import soloimg3 from "../assets/img/pokedex.png";
import soloimg4 from "../assets/img/todolist.png";
import "animate.css";
import TrackVisibility from "react-on-screen";

export const Projects = () => {
  const firstprojects = [
    {
      title: "Pokemon",
      imgUrl: siteimg1,
      url: "https://dongsusin.github.io/01-CITE/01-pokomon/pocketmon.html",
    },
    {
      title: "Neowiz",
      imgUrl: siteimg2,
      url: "https://dongsusin.github.io/01-CITE/02-neowiz/neowiz.html",
    },
    {
      title: "Kakao",
      imgUrl: siteimg3,
      url: "https://dongsusin.github.io/01-CITE/03.kakao/kakao.html",
    },
    {
      title: "Kaist",
      imgUrl: siteimg4,
      url: "https://dongsusin.github.io/01-CITE/04-kaist/kaist.html",
    },
    {
      title: "Nexon",
      imgUrl: siteimg5,
      url: "https://dongsusin.github.io/01-CITE/05-nexon/nexon.html",
    },
  ];
  const secondprojects = [
    {
      title: "반응속도 테스트",
      imgUrl: gameimg1,
      url: "https://dongsusin.github.io/02-GAME/01-seped/speed.html",
    },
    {
      title: "지뢰찾기",
      imgUrl: gameimg2,
      url: "https://dongsusin.github.io/02-GAME/02-search/search.html",
    },
    {
      title: "테트리스",
      imgUrl: gameimg3,
      url: "https://dongsusin.github.io/02-GAME/03-tetris/tetris.html",
    },
    {
      title: "2048",
      imgUrl: gameimg4,
      url: "https://dongsusin.github.io/02-GAME/04-2048/2048.html",
    },
  ];
  const thirdprojects = [
    {
      title: "날씨GPS",
      imgUrl: soloimg1,
      url: "https://dongsusin.github.io/03-ANI-API/02-weather/weather.html",
    },
    {
      title: "환률계산기",
      imgUrl: soloimg2,
      url: "https://dongsusin.github.io/03-ANI-API/03-adjustment/exchange.html",
    },
    {
      title: "포켓몬API도감",
      imgUrl: soloimg3,
      url: "https://brilliant-alfajores-bbb341.netlify.app/",
    },
    {
      title: "To-Do-List",
      imgUrl: soloimg4,
      url: "https://shimmering-duckanoo-86e550.netlify.app/",
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
                        <Nav.Link eventKey="first">Clone Site</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="second">Game</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="third">API&React</Nav.Link>
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
                          <p className="project-title">사용 스킬:Html,Css,Js</p>
                          {firstprojects.map((project, index) => {
                            return <ProjectCard key={index} {...project} />;
                          })}
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="second">
                        <Row className="row-skill">
                          <p className="project-title">사용 스킬:Html,Css,Js</p>
                          {secondprojects.map((project, index) => {
                            return <ProjectCard key={index} {...project} />;
                          })}
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="third">
                        <Row className="row-skill">
                          <p className="project-title">사용 스킬:React,API</p>
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
