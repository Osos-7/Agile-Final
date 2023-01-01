import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Carousel from "react-bootstrap/Carousel";
import Button from "react-bootstrap/Button";
// import heroImg from "../../assests/images/hero-img1.png";
import "./hero-section.css";

const HeroSection = () => {
  return (
    <section>
      <Container>
        <Row>
          <Col lg="6" md="6">
            <div className="hero__content">
              <h2 className="mb-4 hero__title">
                Anytime Anywhere <br /> Learn on your <br /> Suitable Schedule
              </h2>
              <p className="mb-5">
                Whatever you're willing to learn, you'll find it here at NAGA7NY 
                with the help of hundreds of trusted instructors.
                Despite your degree,level and profession you will find a guide
                for what you are looking for here and FOR FREE!
                
              </p>
            </div>
            <div className="search">
              <input type="text" placeholder="Search" />
              <button className="btn">Search</button>
            </div>
          </Col>

          <Col lg="6" md="6">
          <img src="https://www.newsecuritybeat.org/wp-content/uploads/2022/09/Untitled-design.png" alt="" />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default HeroSection;





{/* <Carousel variant="dark">
<Carousel.Item interval={2000}>
  <div className="poster">
    <img
      // className="d-block w-100"
      src="https://www.newsecuritybeat.org/wp-content/uploads/2022/09/Untitled-design.png"
      alt="First slide"
    />
  </div>
</Carousel.Item>

<Carousel.Item interval={2000}>
  <div className="poster">
    <img
      // className="d-block w-100"
      src="https://www.newsecuritybeat.org/wp-content/uploads/2022/09/Untitled-design.png"
      alt="Second slide"
    />
  </div>
</Carousel.Item>

<Carousel.Item>
  <div className="poster">
    <img
      // className="d-block w-100"
      src="https://reporter.rit.edu:8443/sites/pubDir/slideShow/08-16/212-1474-47783801.jpg"
      alt="Third slide"
    />
  </div>
</Carousel.Item>

</Carousel> */}