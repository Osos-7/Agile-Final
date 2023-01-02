import React from 'react'
import { Container, Row, Col } from "react-bootstrap";
import NotesContent from "./NotesContent";


const NotesData = [
    {
      id: "01",
      title: "Physics",
      imgUrl:"https://img.freepik.com/free-vector/illustration-data-folder-icon_53876-6329.jpg?w=2000",
      path:"/notes_documents"
    },
  
    {
      id: "01",
      title: " Biology",
      // description:"Final Exam Revision.",
      imgUrl:"https://img.freepik.com/free-vector/illustration-data-folder-icon_53876-6329.jpg?w=2000"
    },

    {
      id: "01",
      title: "Arabic",
      // description:"First Lesson.",
      imgUrl:"https://img.freepik.com/free-vector/illustration-data-folder-icon_53876-6329.jpg?w=2000"
    },
  ];

const Notes = () => {
  return (
    <div>
         <section>
      <Container>
        <Row>
          <Col lg="12" className="mb-5">
            <div className="course__top d-flex justify-content-between align-items-center">
              <div className="course__top__left w-50">
                <h2>Our Popular Courses</h2>
                {/* <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae
                  consequatur libero quod voluptatibus ullam quia quas, vitae
                  voluptatem recusandae reprehenderit!
                </p> */}
              </div>

              <div className="w-50 text-end">
                <button className="btn">See All</button>
              </div>
            </div>
          </Col>
          {NotesData.map((item) => (
            <Col lg="4" md="6" sm="6">
              <NotesContent key={item.id} item={item} />
            </Col>
          ))}
        </Row>
      </Container>
    </section>
    </div>
  )
}

export default Notes