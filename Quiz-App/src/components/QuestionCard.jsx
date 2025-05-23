import React from 'react'
import '../styles/App.css'

const QuestionCard = () => {
  return (
 <div className='container'>
       <div className='question-card'>
        <h1 className='topic'>My Quiz app</h1>
        <h3 className='question-text'>Questions goes here</h3>
        <div className='options'>
            <button className='option-btn'>option1</button>
            <button className='option-btn'>option2</button>
            <button className='option-btn'>option3</button>
            <button className='option-btn'>option4</button>
        </div>
      
    </div>

 </div>
  )
}

export default QuestionCard
