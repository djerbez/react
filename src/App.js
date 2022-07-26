import React, { useEffect, useState } from "react";

const names = ["John", "Jane", "Mary", "Tom"];
const App = () => {
  const [score, setScore] = useState(0);
  const [name, setName] = useState(names[0]);

  useEffect(()=>{
    setName(names[score])
  }, [score])
  
  const increaseScore = () => {
    if (score<names.length - 1) {
      setScore(score+1)
    }
  }
    const decreaseScore = () => {
      if (score>0) {
        setScore(score-1)
      }
  }
  return (
    <div>
      <h1>{name}</h1>
      <button onClick={increaseScore}>Increase score</button>
      <button onClick={decreaseScore}>Decrease score</button>
    </div>
  )
}
export default App;
