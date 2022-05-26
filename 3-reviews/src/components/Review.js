import React, { useState } from "react";
import people from '../data'
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa'

const Review = () => {
  const [index, setIndex] = useState(0);
  const {name, job, image, text} = people[index]
  
  const checkNumber = (index) => {
    if(index < 0) {
      return people.length - 1
    }
    if(index > people.length - 1) {
      return 0
    }
    return index;
  }

  const prevPerson = () => {
    const newIndex = index - 1
    setIndex(checkNumber(newIndex))
  }

  const nextPerson = () => {
    const newIndex = index + 1
    setIndex(checkNumber(newIndex))
  }

  const randomPerson = () => {
    const random = Math.floor(Math.random() * people.length)
    setIndex(checkNumber(random))
  }

  return(
    <article className='review'>
      <div className='img-container'>
        <img src={image} alt={name} className='person-img' />
        <span className="quote-icon">
          <FaQuoteRight />
        </span>
      </div>
      <h4 className="author">{name}</h4>
      <p className="job">{job}</p>
      <p className="info">{text}</p>
      <div className="button-container">
        <button className="prev-btn" onClick={prevPerson}>
          <FaChevronLeft />
        </button>
        <button className="prev-btn" onClick={nextPerson}>
          <FaChevronRight />
        </button>
      </div>
      <button className="random-btn" onClick={randomPerson}>
          Surprise Me!
        </button>
    </article>
  );
}

export default Review;