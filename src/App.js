import React, {useState} from 'react';
import { useEffect } from 'react';

import FlashBody from "./flashcard/components/Flashcard.js";

const questions = [
  ['servus'],
  ['slave'],
  ['amicus'],
  ['friend']
]


const App = () => {
  //Defines state of pressed or not
  const [active, setActive] = useState(0);

  //Defines Flashcard Iteration
  const [count, setCount] = useState(0);

  //Changing between definition or not
  const handleClick = () => {
    setActive(active => active + 1);
  };

  useEffect(() => {
    document.addEventListener('keydown', keyDown, true)
  }, [])

  const keyDown = (e) => {
    console.log("Clicked key: ", e.key)

  
    if(e.key === ' '){
      setActive(active => active + 1);
    } else if(e.key === "ArrowRight"){
      setCount(count + 1)
    } else if(e.key === "ArrowLeft"){
      setCount(count - 1)
    }

    
  };

  //Flashcard Graphic
  return (
    <FlashBody 
      value = {active%2 === 1 ? questions[count] : questions[count + 1]}
      onClick = {handleClick}
    /> 
  );
  };

export default App;

/*
{questions.flat().map((id) => {
          console.log(id);
          return(
          <Button
          key = {id}
          className = 'right'
          value = {id}
          />
        ) 
      })
    }     
*/