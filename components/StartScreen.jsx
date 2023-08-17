import React from "react"


export default function StartScreen(props) {

  const [value, setValue] = React.useState("Random")

  const handleChange = (e) => {
    setValue(e.target.value);
    props.preLoadQuizInfo(e.target.value)
  };

  React.useEffect(() => {
    props.preLoadQuizInfo(value)
  }, [])

  return (
    <div className="start-div">
        <h1> Quizzical </h1>
        <h3> Choose a category: </h3>
        <select value={value} onChange={handleChange} on id="category">
          <option value="audi">Random</option>
          <option value="Games">Games</option>
          <option value="Movies">Movies</option>
          <option value="Tech">Tech</option>
        </select>
        <button onClick={props.startQuiz}> Start Quiz </button>
      </div>
  )
}