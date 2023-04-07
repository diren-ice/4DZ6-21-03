import React from 'react'

const Pagination = (
    {pageCount,
        page,
         handleNext,
          handlePrev }
    ) => {
  return (
    <div className='pagination'>
        <button onClick={handlePrev} className="buttons">Prev</button>
            {page} / {pageCount}
            <button onClick={handleNext} className="buttons">Next</button>
    </div>
  )
}

export default Pagination