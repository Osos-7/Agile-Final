import React from 'react'
import { Container, Row, Col } from "react-bootstrap";
import "./NotesDocuments.css"
import Electricity from "../Assets/Electricity.pdf"
import Exam from "../Assets/Exam.pdf"
import Revision from "../Assets/Revision.pdf"
import { Link } from 'react-router-dom';
import Navbar from '../Components/Header/Navbar'


const NotesDocuments = () => {
  return (
    <div>
       <Navbar/>
        <div className='pdf_titles'>
            <h4 className='pdf_header'>Revision Notes</h4>
            <div className="pdf_files" onClick={() => window.open(Electricity)}>Electricity Chapter 2</div>
            <div className="pdf_files" onClick={() => window.open(Revision)}>Final Revision</div>
        </div>

        <div className='pdf_titles'>
            <h4 className='pdf_header'>Past Exams</h4>
            <div className="pdf_files" onClick={() => window.open(Exam)}>Exam Chapter 3</div>
        </div>
    </div>
    
        
    
  )
}

export default NotesDocuments