import React, { useState } from 'react'
import { AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/ai'
import reviews from '../data'

const Main = () => {
  const [page, setPage] = useState(1)

  const prevPage = () => {
    if (page === 1) {
      setPage(4)
    } else {
      setPage(page - 1)
    }
  }

  const nextPage = () => {
    if (page === 4) {
      setPage(1)
    } else {
      setPage(page + 1)
    }
  }

  const randomPage = () => {
    const random = Math.floor(Math.random() * (4 - 1) + 1)
    setPage(random)
  }
  return (
    <>
      <h1>All reviews</h1>
      <div className='reviews-container'>
        <h2>{reviews[page - 1].name}</h2>
        <img src={reviews[page - 1].image} alt='img' />
        <h3>{reviews[page - 1].job}</h3>
        <h4>{reviews[page - 1].text}</h4>
        <div className='btn-container'>
          <button type='button' className='page-btn' onClick={() => prevPage()}>
            <AiOutlineArrowLeft />
          </button>
          <button
            type='button'
            className='page-btn'
            onClick={() => randomPage()}>
            Random
          </button>
          <button type='button' className='page-btn' onClick={() => nextPage()}>
            <AiOutlineArrowRight />
          </button>
        </div>
      </div>
    </>
  )
}

export default Main
