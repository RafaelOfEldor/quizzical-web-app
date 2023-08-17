import React from "react"
import StartScreen from "/components/StartScreen.jsx"
import QuizScreen from "/components/QuizScreen.jsx"
import { nanoid } from "nanoid"






export default function App() {

  const [quizStarted, setQuizStarted] = React.useState(false)
  const [isChecked, setIsChecked] = React.useState(false)
  const [amountOfCorrectAnswers, setAmountOfCorrectAnswers] = React.useState(0)
  const [questionsAndAnswers, setQuestionsAndAnswers] = React.useState([])

  async function fetchQuestionsAndAnswers(category) {
    if (category === "Random") {
      const response = await fetch("https://opentdb.com/api.php?amount=5&type=multiple");
      const data = await response.json();
      setQuestionsAndAnswers(() => {
        return data.results.map( (item, index) => {
            return {
                id: index,
                question: item.question,
                correctAnswer: item.correct_answer,
                incorrectAnswers: item.incorrect_answers,
                category: `category ${ index + 1 }`,
                selectedAnswer: "",
                checked: false
            }
        });
      })
    } else if (category === "Games") {
      const response = await fetch("https://opentdb.com/api.php?amount=5&category=15&type=multiple");
      const data = await response.json();
      setQuestionsAndAnswers(() => {
        return data.results.map( (item, index) => {
            return {
                id: index,
                question: item.question,
                correctAnswer: item.correct_answer,
                incorrectAnswers: item.incorrect_answers,
                category: `category ${ index + 1 }`,
                selectedAnswer: "",
                checked: false
            }
        });
      })
    } else if (category === "Movies") {
      const response = await fetch("https://opentdb.com/api.php?amount=5&category=11&type=multiple");
      const data = await response.json();
      setQuestionsAndAnswers(() => {
        return data.results.map( (item, index) => {
            return {
                id: index,
                question: item.question,
                correctAnswer: item.correct_answer,
                incorrectAnswers: item.incorrect_answers,
                category: `category ${ index + 1 }`,
                selectedAnswer: "",
                checked: false
            }
        });
      })
    } else if (category === "Tech") {
      const response = await fetch("https://opentdb.com/api.php?amount=5&category=18&type=multiple");
      const data = await response.json();
      setQuestionsAndAnswers(() => {
        return data.results.map( (item, index) => {
            return {
                id: index,
                question: item.question,
                correctAnswer: item.correct_answer,
                incorrectAnswers: item.incorrect_answers,
                category: `category ${ index + 1 }`,
                selectedAnswer: "",
                checked: false
            }
        });
      })
    } 
    

     
}

  



  const questionsAndAnswersElement = questionsAndAnswers.map((item) => {
    return (
      
      <QuizScreen
        key={nanoid()}
        questionSet={item}
        selectedAnswer={selectedAnswer}
        isChecked={isChecked}
      />
      )
    }
 )

 
    React.useEffect(() => {

    }, [])

  function startQuiz() {
    setQuizStarted(true)
  }
  

  function selectedAnswer(selected, id) {
    if (!isChecked) {

      console.log(selected)
      console.log(id)
      setQuestionsAndAnswers(prev => prev.map(item => {
        if (id === item.id) {
          
            return (
              {
                ...item, 
                checked: selected === item.selectedAnswer | item.selectedAnswer === "" ? !item.checked : item.checked,
                selectedAnswer: item.selectedAnswer === selected ? "" : selected
              
              }
            )
          } else {
            return (
              {...item}
            )
          }
        }
      )
    )
  }

  
    
}


React.useEffect(() => {
  setAmountOfCorrectAnswers(0)
  for (let i = 0; i<questionsAndAnswers.length; i++) {
    questionsAndAnswers.map(item => {
     if (i === item.id & item.selectedAnswer === item.correctAnswer) {
      setAmountOfCorrectAnswers(prev => prev + 1) 
     } else if (i === item.id & item.selectedAnswer === item.correctAnswer) {
      setAmountOfCorrectAnswers(prev => prev + 1)  
     } else if (i === item.id & item.selectedAnswer === item.correctAnswer) {
      setAmountOfCorrectAnswers(prev => prev + 1)  
     } else if (i === item.id & item.selectedAnswer === item.correctAnswer) {
      setAmountOfCorrectAnswers(prev => prev + 1)  
     } else if (i === item.id & item.selectedAnswer === item.correctAnswer) {
      setAmountOfCorrectAnswers(prev => prev + 1) 
     }
   })
 }
}, [questionsAndAnswers]);

function checkAnswers() {
  setIsChecked(true)
}

function resetGame() {
  setIsChecked(false)
  setQuizStarted(false)
  setAmountOfCorrectAnswers(0)
  fetchQuestionsAndAnswers()
}



  return (
    <main>
      {quizStarted ?
      <div className="quiz-div">
        {questionsAndAnswersElement}
        {isChecked ? 
        <div className="checked-screen-div"> 
          <h3>You answered {amountOfCorrectAnswers}/{questionsAndAnswers.length} questions correctly.</h3>
          <button className="play-again-button" onClick={resetGame}> Play again</button> 
        </div>
        :
        <button className="check-answers-button" onClick={checkAnswers}>Check answers </button> }
      </div> 
      :
      <StartScreen 
      startQuiz={startQuiz}
      preLoadQuizInfo={fetchQuestionsAndAnswers}
      />
      }
      

      <div className="blue-blob-div">
      <img src="/images/blue blob.png" className="blue-blob-image"/>
      </div>

      <div className="green-blob-div">
        <img src="/images/green blob.png" className="green-blob-image"/>
      </div>


      
      
    </main>
  )
}