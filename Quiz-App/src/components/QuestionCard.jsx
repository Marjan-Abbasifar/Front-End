import React, { useState } from 'react'
import '../styles/App.css'
import questions from '../data/questions'

const QuestionCard = () => {

   const [currentIndex, setCurrentIndex] = useState(0)
    const[score, setScore] = useState(0)
    const [selectedOption, setSelectedOption] = useState(null)
    const [showResult, setShowResult] = useState(false)
    


    const currentQuestion = questions[currentIndex]
   const totalQuestion = questions.length
  
  
    const handleAnswer = (option) =>{
      setSelectedOption(option);
      if(option === currentQuestion.answer){
        setScore(score+1)
      }
  
  
    }
  
  
    const handleNext = () =>{
      setSelectedOption(null)
      setCurrentIndex(currentIndex+1)
    }
  
    const isLastQuestion = currentIndex === questions.length-1

    const handleResult = (option) =>{
      setShowResult(true)
    }
    
    const handleRetry = () => {
      setCurrentIndex(0);
      setScore(0);
    setSelectedOption(null);
    setShowResult(false)
    }

    if(showResult){
      return(
        <div className='container'>
        <div className='result-card'>
          <h1 className='result-topic'>My Quiz Card</h1>
          <h2>Your Score:</h2>
          <p>Your score is {score} from {totalQuestion}</p>
          <button className='retry-btn' onClick={handleRetry}>Retry</button>
        </div>
      </div>
      )
    }
  
  
  


const getButtonClass = (option) => {
  if(!selectedOption) return 'option-btn'
  if (option === currentQuestion.answer) return 'option-btn correct'
  if (option === selectedOption && option != currentQuestion.answer) return 'option-btn wrong'
  return 'option-btn';
}
  
  return (
 <div className='container'>
       <div className='question-card'>
        <h1 className='topic'>My Quiz App</h1>
        <h3 className='question-text'>{currentQuestion.question}</h3>
        <div className='options'>
          {currentQuestion.options.map((option, index)=>(
              <button key={index} className={getButtonClass(option)} onClick={() => handleAnswer(option)}>{option}</button>
            ))}
        </div>
        {!isLastQuestion && (<button className='control-btn' id='next' onClick={handleNext}>Next</button>)}
         { isLastQuestion && (<button className='control-btn' id='result' onClick={handleResult}>Result </button>)} 
      
    </div>

 </div>
  )
}

export default QuestionCard
