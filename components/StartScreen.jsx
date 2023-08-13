import React from "react"


export default function StartScreen(props) {
  return (
    <div className="start-div">
        <h1> Quizzical </h1>
        <h3> Random category </h3>
        <button onClick={props.startQuiz}> Start Quiz </button>
      </div>
  )
}