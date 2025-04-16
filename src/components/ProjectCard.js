import { Col } from "react-bootstrap";

export const ProjectCard = ({ title, imgUrl, url }) => {
  return (
    <Col size={12} xl={4} lg={6} className="proj-box">
      <div className="proj-imgbx">
        <img src={imgUrl} alt="imgurl" />
        <div className="proj-txtx">
          <h4>{title}</h4>
          <a href={url}>사이트</a>
        </div>
      </div>
    </Col>
  );
};
