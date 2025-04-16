import { Container, Row, Col } from "react-bootstrap";
import headerImg from "../assets/img/header-img.jpg";
import "animate.css";
import TrackVisibility from "react-on-screen";

export const Banner = () => {
  return (
    <section className="banner" id="home">
      <Container>
        <Row className="aligh-items-center">
          <Col xs={12} md={6} xl={7}>
            <TrackVisibility className="banner-text">
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__fadeIn" : ""
                  }
                >
                  <span className="tagline">웹-프론트엔드 포트폴리오</span>
                  <h1>안녕하세요 프론트엔드 개발자 신동수입니다.</h1>
                  <p>
                    사용자에게 가장먼저 다가갈수있는 프론트엔드 개발의 매력에
                    빠져 끊임없이 더나은 개발자가 되기위해 노력하고있습니다.
                  </p>
                </div>
              )}
            </TrackVisibility>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__zoomIn" : ""
                  }
                >
                  <img src={headerImg} alt="Header Img" />
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
