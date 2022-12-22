import FlashBody from "./flashcard/components/Flashcard.js";

const questions = [
  ['servus'],
  ['Question b is right'],
  ['Question c is right'],
  ['Question d is right']
]

const App = () => {
  return (
    <FlashBody 
      value = {questions[0]}
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