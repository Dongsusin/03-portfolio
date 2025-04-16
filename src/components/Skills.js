import meter1 from "../assets/img/meter1.svg";
import meter2 from "../assets/img/meter2.svg";
import meter3 from "../assets/img/meter3.svg";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import htmlimg from "../assets/img/html.png";
import cssimg from "../assets/img/css.webp";
import javaimg from "../assets/img/java.png";
import reactimg from "../assets/img/react.png";
import githublimg from "../assets/img/github.png";

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <section className="skill" id="skills">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="skill-bx wow zoomIn">
              <h2>Skill</h2>
              <Carousel
                responsive={responsive}
                infinite={true}
                className="owl-carousel owl-theme skill-slider"
              >
                <div className="item">
                  <img src={meter1} alt="Image" />
                  <h5>
                    <img src={htmlimg} alt="htmlimg" className="skillimg" />
                    HTML
                  </h5>
                </div>
                <div className="item">
                  <img src={meter1} alt="Image" />
                  <h5>
                    <img src={cssimg} alt="cssimg" className="skillimg" />
                    CSS
                  </h5>
                </div>
                <div className="item">
                  <img src={meter3} alt="Image" />
                  <h5>
                    <img src={javaimg} alt="javaimg" className="skillimg" />
                    JAVA
                  </h5>
                </div>
                <div className="item">
                  <img src={meter2} alt="Image" />
                  <h5>
                    <img src={reactimg} alt="reactimg" className="skillimg" />
                    REACT
                  </h5>
                </div>
                <div className="item">
                  <img src={meter3} alt="Image" />
                  <h5>
                    <img
                      src={githublimg}
                      alt="githubimg"
                      className="skillimg"
                    />
                    GITHUB
                  </h5>
                </div>
              </Carousel>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
