import React from 'react'
import VideosContent from './VideosContent'
import { Container, Row, Col } from "react-bootstrap";


const VideosData = [
    {
      id: "01",
      title: "Physics",
      description:"First Lesson.",
      vidUrl:"https://www.youtube.com/embed/GBjLMq5IonQ"
    },
  
    {
      id: "01",
      title: " Biology",
      description:"Final Exam Revision.",
      vidUrl:"https://www.youtube.com/embed/EylC9MUZIJA"
    },

    {
      id: "01",
      title: "Arabic",
      description:"First Lesson.",
      vidUrl:"https://www.youtube.com/embed/uZZPtP4bDFc"
    },
  ];

const Videos = () => {
  return (
    <div>
         <section>
      <Container>
        <Row>
          <Col lg="12" className="mb-5">
            <div className="course__top d-flex justify-content-between align-items-center">
              <div className="course__top__left w-50">
                <h2>Our Popular Courses</h2>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae
                  consequatur libero quod voluptatibus ullam quia quas, vitae
                  voluptatem recusandae reprehenderit!
                </p>
              </div>

              <div className="w-50 text-end">
                <button className="btn">See All</button>
              </div>
            </div>
          </Col>
          {VideosData.map((item) => (
            <Col lg="4" md="6" sm="6">
              <VideosContent key={item.id} item={item} />
            </Col>
          ))}
        </Row>
      </Container>
    </section>
    </div>
  )
}

export default Videos