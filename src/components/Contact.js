import { Container, Row, Col } from "react-bootstrap";
import contactImg from "../assets/img/contact.png";
import TrackVisibility from "react-on-screen";

export const Contact = () => {
  return (
    <section className="contact" id="connect">
      <Container>
        <Row className="align-items-center row-contact">
          <Col size={12} md={6}>
            <TrackVisibility>
              <img src={contactImg} alt="Contact Us" />
            </TrackVisibility>
          </Col>
          <Col size={12} md={6}>
            <TrackVisibility>
              <div>
                <h2>Contact</h2>
                <form>
                  <Row>
                    <Col className="contact-box">
                      <p>이름:신동수</p>
                      <p>생년월일:020715</p>
                      <p>전화번호:010-2201-5617</p>
                      <p>이메일:auroratime020715@gmail.com</p>
                    </Col>
                  </Row>
                </form>
              </div>
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
