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
import soloimg5 from "../assets/img/protfolio.png";
import soloimg6 from "../assets/img/calculator.png";
import soloimg7 from "../assets/img/LostArk.png";
import "animate.css";
import TrackVisibility from "react-on-screen";

export const Projects = () => {
  const firstprojects = [
    {
      title: "Pokemon",
      imgUrl: siteimg1,
      url: "https://dongsusin.github.io/01-CITE/01-pokomon/pocketmon.html",
      githuburl: "https://github.com/Dongsusin/01-CITE/tree/main/01-pokomon",
      useskill: "Html,Css,js",
    },
    {
      title: "Neowiz",
      imgUrl: siteimg2,
      url: "https://dongsusin.github.io/01-CITE/02-neowiz/neowiz.html",
      githuburl: "https://github.com/Dongsusin/01-CITE/tree/main/02-neowiz",
      useskill: "Html,Css,js",
    },
    {
      title: "Kakao",
      imgUrl: siteimg3,
      url: "https://dongsusin.github.io/01-CITE/03.kakao/kakao.html",
      githuburl: "https://github.com/Dongsusin/01-CITE/tree/main/03.kakao",
      useskill: "Html,Css,js",
    },
    {
      title: "Kaist",
      imgUrl: siteimg4,
      url: "https://dongsusin.github.io/01-CITE/04-kaist/kaist.html",
      githuburl: "https://github.com/Dongsusin/01-CITE/tree/main/04-kaist",
      useskill: "Html,Css,js",
    },
    {
      title: "Nexon",
      imgUrl: siteimg5,
      url: "https://dongsusin.github.io/01-CITE/05-nexon/nexon.html",
      githuburl: "https://github.com/Dongsusin/01-CITE/tree/main/05-nexon",
      useskill: "Html,Css,js",
    },
  ];
  const secondprojects = [
    {
      title: "반응속도 테스트",
      imgUrl: gameimg1,
      url: "https://dongsusin.github.io/02-GAME/01-seped/speed.html",
      githuburl: "https://github.com/Dongsusin/02-GAME/tree/main/01-seped",
      useskill: "Html,Css,js",
    },
    {
      title: "지뢰찾기",
      imgUrl: gameimg2,
      url: "https://dongsusin.github.io/02-GAME/02-search/search.html",
      githuburl: "https://github.com/Dongsusin/02-GAME/tree/main/02-search",
      useskill: "Html,Css,js",
    },
    {
      title: "테트리스",
      imgUrl: gameimg3,
      url: "https://dongsusin.github.io/02-GAME/03-tetris/tetris.html",
      githuburl: "https://github.com/Dongsusin/02-GAME/tree/main/03-tetris",
      useskill: "Html,Css,js",
    },
    {
      title: "2048",
      imgUrl: gameimg4,
      url: "https://dongsusin.github.io/02-GAME/04-2048/2048.html",
      githuburl: "https://github.com/Dongsusin/02-GAME/tree/main/04-2048",
      useskill: "Html,Css,js",
    },
  ];
  const thirdprojects = [
    {
      title: "날씨GPS",
      imgUrl: soloimg1,
      url: "https://dongsusin.github.io/03-ANI-API/02-weather/weather.html",
      githuburl: "https://github.com/Dongsusin/03-ANI-API/tree/main/02-weather",
      useskill: "Html,Css,Js,API",
    },
    {
      title: "환률계산기",
      imgUrl: soloimg2,
      url: "https://dongsusin.github.io/03-ANI-API/03-adjustment/exchange.html",
      githuburl:
        "https://github.com/Dongsusin/03-ANI-API/tree/main/03-adjustment",
      useskill: "Html,Css,Js,API",
    },
    {
      title: "포켓몬API도감",
      imgUrl: soloimg3,
      url: "https://brilliant-alfajores-bbb341.netlify.app/",
      githuburl: "https://github.com/Dongsusin/01-pokemon-pokedex",
      useskill: "React,API,Css",
    },
    {
      title: "To-Do-List",
      imgUrl: soloimg4,
      url: "https://shimmering-duckanoo-86e550.netlify.app/",
      githuburl: "https://github.com/Dongsusin/02-todolist",
      useskill: "React,Css",
    },
    {
      title: "포트폴리오",
      imgUrl: soloimg5,
      url: "https://luxury-vacherin-425521.netlify.app/",
      githuburl: "https://github.com/Dongsusin/03-portfolio",
      useskill: "React,Css",
    },
    {
      title: "계산기",
      imgUrl: soloimg6,
      url: "https://delicate-lily-bcf778.netlify.app/",
      githuburl: "https://github.com/Dongsusin/04-calculator",
      useskill: "React,Css",
    },
    {
      title: "LostArk",
      imgUrl: soloimg7,
      url: "https://idyllic-lolly-70a8fa.netlify.app/",
      githuburl: "https://github.com/Dongsusin/05-gamesite",
      useskill: "React,Css",
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
