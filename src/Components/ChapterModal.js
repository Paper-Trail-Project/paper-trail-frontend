import React, { useState, useEffect } from 'react'
import Section from './Section'
import '../Styles/Encyclopedia.css'

export default function ChapterModal({ show, handleClose, chapter, sections }) {

  const [selectedChapter, setSelectedChapter] = useState(chapter)
  const [pageNumber, setPageNumber] = useState(0);

  const showHideClassName = show ? "modal display-block" : "modal display-none"

  const nextPage = () => {
    setPageNumber(pageNumber+1)
    console.log(pageNumber)
  }

  const displaySections = () => {
    if(show){
     return sections.map(section => <Section section={section} selectedChapter={selectedChapter}/>)
    }
  }



  return (
    <div className={showHideClassName}>
      <section className="modal-main">
      <p style={{color: "black"}}>{displaySections()}</p>

        <button>back</button>
        <button onClick={handleClose}>X</button>
        <button onClick={nextPage}>next</button>
       
      </section>
    </div>
  )
}
