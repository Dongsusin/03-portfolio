import { Col } from "react-bootstrap";

export const ProjectCard = ({ title, imgUrl, url, githuburl, useskill }) => {
  return (
    <Col size={12} xl={4} lg={6} md={6} className="proj-box">
      <div className="proj-imgbx">
        <img src={imgUrl} alt="imgurl" />
        <div className="proj-txtx">
          <h4>{title}</h4>
          <h2>사용기술:{useskill}</h2>
          <div className="urlbox">
            <a href={url}>사이트</a>
            <a href={githuburl}>github</a>
          </div>
        </div>
      </div>
    </Col>
  );
};
