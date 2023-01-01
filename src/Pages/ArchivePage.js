import React from 'react'
import { useState } from 'react'
import FileUpload from '../Components/Archive/FileUpload'
import FileList from '../Components/Archive/FileList'
// import FileItem from '../Components/Archive/FileItem'

const Archive = () => {

  const [files, setFiles] = useState([])

  const removeFile = (filename) => {
    setFiles(files.filter(file => file.name !== filename))
  }
  return (
    <div className="App">
      <div className="title"></div>
      <FileUpload files={files} setFiles={setFiles}
        removeFile={removeFile} />
      <FileList files={files} removeFile={removeFile} />
    </div>
  )
}

export default Archive