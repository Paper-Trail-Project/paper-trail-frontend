import React, { useState, useEffect } from 'react'
import '../Styles/Encyclopedia.css'

export default function ChapterModal({ show, handleClose, chapter }) {

  const [selectedChapter, setSelectedChapter] = useState(chapter)
  const [pageNumber, setPageNumber] = useState(0);



  const showHideClassName = show ? "modal display-block" : "modal display-none"

  const nextPage = () => {
    setPageNumber(pageNumber+1)
    console.log(pageNumber)
  }



  return (
    <div className={showHideClassName}>
      <section className="modal-main">
      <button>back</button>
        <button onClick={handleClose}>X</button>
        <button onClick={nextPage}>next</button>

      </section>
    </div>
  )
}
