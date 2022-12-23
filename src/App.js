import React, {useState} from 'react';
import { useEffect } from 'react';

import FlashBody from "./flashcard/components/Flashcard.js";
import ArrowRight from "./flashcard/components/right.js"

const questions = [
  ['servus', 'slave'],
  ['amicus', 'friend']
]



const App = () => {
  //Defines state of pressed or not
  const [active, setActive] = useState(0);

  const handleClickF = () => {
      setActive(active => active + 1);
  };

  //-----------------------------

  //Defines Flashcard Iteration
  const [count, setCount] = useState(0);

  //Arrow Holder
  const handleClickA = () => {
    setCount(count => count + 1)
  }


  //Keyboard Information
  useEffect(() => {
    document.addEventListener('keydown', keyDown, true)
  }, [])

  const keyDown = (e) => {

    if(e.key === ' '){
      setActive(active => active + 1);
    } else if(e.key === "ArrowRight"){
      setCount(count => count + 1);
    } else if(e.key === "ArrowLeft"){
      setCount(count => count - 1);
    }


  };

  //Flashcard Graphic
  return (
    <div>
      <FlashBody 
        value = {
        count >= questions.length ? "Good Job!" : active%2 === 1 ? questions[count][0] : questions[count][1]
        }
        onClick = {handleClickF}
      />
      {console.log(count)}

      <ArrowRight
        onClick = {handleClickA}
      />
    </div> 
    // 
  );
  };

export default App;

