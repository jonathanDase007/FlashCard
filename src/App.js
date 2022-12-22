
import Flashcard from "./flashcard/flashcard.js";
import Button from "./flashcard/components/flashcardButton.js";
import Wrapper from "./flashcard/components/Wrapper.js";
import Box from "./flashcard/components/Box.js";


const questions = [
  ['Question a is right'],
  ['Question b is right'],
  ['Question c is right'],
  ['Question d is right']
]

const App = () => {
  return (
    <Wrapper>
      <Box>
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
      </Box>
      
    </Wrapper>
  );
  };

export default App;
