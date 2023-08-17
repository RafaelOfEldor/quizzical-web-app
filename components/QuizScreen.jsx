import React from "react"
import { decode } from 'html-entities' ;


export default function({questionSet, selectedAnswer, isChecked}, ...rest) {


  const answers = [questionSet.correctAnswer, ...questionSet.incorrectAnswers].sort();
  const answerOne = decode(answers[0])
  const answerTwo = decode(answers[1])
  const answerThree = decode(answers[2])
  const answerFour = decode(answers[3])

  return (
    <div>
    {isChecked ?
    <div>
      <div className="quiz-question">
        <h3> { decode(questionSet.question) } </h3>
      </div>
      
      <div className="quiz-answers">
        <div 
        className={questionSet.correctAnswer === answerOne ? 
        "answer-one-div-checked" : questionSet.selectedAnswer === answerOne ? "answer-one-div-checked-fail" : "answer-one-div"}>
        <h4> {answerOne}</h4> 
      </div>

        <div className={questionSet.correctAnswer === answerTwo ?
          "answer-two-div-checked" : questionSet.selectedAnswer === answerTwo ? "answer-one-div-checked-fail" : "answer-one-div"} >
          <h4> {answerTwo}</h4> 
        </div>

        <div className={questionSet.correctAnswer === answerThree ?
          "answer-three-div-checked" : questionSet.selectedAnswer === answerThree ? "answer-one-div-checked-fail" : "answer-one-div"} > 
          <h4> {answerThree}</h4> 
        </div>

        <div className={questionSet.correctAnswer === answerFour ?
          "answer-four-div-checked" : questionSet.selectedAnswer === answerFour ? "answer-one-div-checked-fail" : "answer-one-div"} > 
          <h4> {answerFour}</h4> 
        </div>
        
      </div>
      <hr></hr>
      </div>
    :
    <div>
      <div className="quiz-question">
          <h3> { decode(questionSet.question) } </h3>
        </div>

        <div className="quiz-answers">
          <div className={questionSet.checked & questionSet.selectedAnswer === answerOne ? "answer-one-div-checked" : "answer-one-div"} onClick={() => selectedAnswer(answerOne, questionSet.id)} > <h4> {answerOne}</h4> </div>
          <div className={questionSet.checked & questionSet.selectedAnswer === answerTwo ? "answer-two-div-checked" : "answer-two-div"} onClick={() => selectedAnswer(answerTwo, questionSet.id)} > <h4> {answerTwo}</h4> </div>
          <div className={questionSet.checked & questionSet.selectedAnswer === answerThree ? "answer-three-div-checked" : "answer-three-div"} onClick={() => selectedAnswer(answerThree, questionSet.id)} > <h4> {answerThree}</h4> </div>
          <div className={questionSet.checked & questionSet.selectedAnswer === answerFour ? "answer-four-div-checked" : "answer-four-div"} onClick={() => selectedAnswer(answerFour, questionSet.id)} > <h4> {answerFour}</h4>  </div>

        </div>
        <hr></hr>
      </div>
    }
    
      
    </div>
  )
}