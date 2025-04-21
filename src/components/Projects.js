import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import siteimg1 from "../assets/img/pokemon.png";
import siteimg2 from "../assets/img/neo.png";
import siteimg3 from "../assets/img/kakao.png";
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
import mile from "../assets/img/밀리의서재.png";
import "animate.css";
import TrackVisibility from "react-on-screen";

export const Projects = () => {
  const firstprojects = [
    {
      title: "Pokemon",
      imgUrl: siteimg1,
      url: "https://fluffy-puffpuff-f27c33.netlify.app/",
      githuburl: "https://github.com/Dongsusin/06-pokemon",
    },
    {
      title: "Neowiz",
      imgUrl: siteimg2,
      url: "https://lustrous-syrniki-282361.netlify.app/",
      githuburl: "https://github.com/Dongsusin/07-neowiz",
    },
    {
      title: "Kakao",
      imgUrl: siteimg3,
      url: "https://illustrious-palmier-afbdf9.netlify.app/",
      githuburl: "https://github.com/Dongsusin/08-kakao",
    },
    {
      title: "LostArk",
      imgUrl: soloimg7,
      url: "https://idyllic-lolly-70a8fa.netlify.app/",
      githuburl: "https://github.com/Dongsusin/05-gamesite",
    },
    {
      title: "밀리의 서재",
      imgUrl: mile,
      url: "https://9rodigital-willie.netlify.app/",
      githuburl: "https://github.com/FRONTENDBOOTCAMP-13th/9RoDigital",
    },
  ];
  const secondprojects = [
    {
      title: "반응속도 테스트",
      imgUrl: gameimg1,
      url: "https://dongsusin.github.io/02-GAME/01-seped/speed.html",
      githuburl: "https://github.com/Dongsusin/02-GAME/tree/main/01-seped",
    },
    {
      title: "지뢰찾기",
      imgUrl: gameimg2,
      url: "https://dongsusin.github.io/02-GAME/02-search/search.html",
      githuburl: "https://github.com/Dongsusin/02-GAME/tree/main/02-search",
    },
    {
      title: "테트리스",
      imgUrl: gameimg3,
      url: "https://dongsusin.github.io/02-GAME/03-tetris/tetris.html",
      githuburl: "https://github.com/Dongsusin/02-GAME/tree/main/03-tetris",
    },
    {
      title: "2048",
      imgUrl: gameimg4,
      url: "https://dongsusin.github.io/02-GAME/04-2048/2048.html",
      githuburl: "https://github.com/Dongsusin/02-GAME/tree/main/04-2048",
    },
  ];
  const thirdprojects = [
    {
      title: "날씨GPS",
      imgUrl: soloimg1,
      url: "https://lively-sunflower-727a6f.netlify.app/",
      githuburl: "https://github.com/Dongsusin/09-weather",
    },
    {
      title: "환률계산기",
      imgUrl: soloimg2,
      url: "https://thunderous-raindrop-0b1bb5.netlify.app/",
      githuburl: "https://github.com/Dongsusin/10-adjustment",
    },
    {
      title: "포켓몬API도감",
      imgUrl: soloimg3,
      url: "https://brilliant-alfajores-bbb341.netlify.app/",
      githuburl: "https://github.com/Dongsusin/01-pokemon-pokedex",
    },
    {
      title: "To-Do-List",
      imgUrl: soloimg4,
      url: "https://shimmering-duckanoo-86e550.netlify.app/",
      githuburl: "https://github.com/Dongsusin/02-todolist",
    },
    {
      title: "포트폴리오",
      imgUrl: soloimg5,
      url: "https://luxury-vacherin-425521.netlify.app/",
      githuburl: "https://github.com/Dongsusin/03-portfolio",
    },
    {
      title: "계산기",
      imgUrl: soloimg6,
      url: "https://delicate-lily-bcf778.netlify.app/",
      githuburl: "https://github.com/Dongsusin/04-calculator",
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
