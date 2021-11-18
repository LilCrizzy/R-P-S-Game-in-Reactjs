import { useState } from "react";
import { useEffect } from "react";

const App = () => {
  const [userChoice, setUserChoice] = useState(null);
  const [computerChoice, setComputerChoice] = useState(null);
  const [result, setResult] = useState(null);
  const choices = ["rock", "papper", "scissors"];

  const handleClick = (value) => {
    setUserChoice(value);
    generateComputerChoice();
  };

  const generateComputerChoice = () => {
    const randomChoice = choices[Math.floor(Math.random() * choices.length)];
    setComputerChoice(randomChoice);
  };

  useEffect(() => {
    {
      switch (userChoice + computerChoice) {
        case "scissorspapper":
        case "rockscissors":
        case "papperrock":
          setResult("YOU WIN");
          break;
        case "papperscissors":
        case "scissorsrock":
        case "rockpapper":
          setResult("YOU LOSE");
          break;
        case "scissorsscissors":
        case "rockrock":
        case "papperpapper":
          setResult("ITS A DRAW");
          break;
      }
    }
  }, [computerChoice, userChoice]);

  return (
    <div>
      <h1>user choice is: {userChoice}</h1>
      <h1>computer choice is: {computerChoice}</h1>
      {choices.map((choice, index) => (
        <button
          key={index}
          onClick={() => {
            handleClick(choice);
          }}
        >
          {choice}
        </button>
      ))}
      <h1>{result}</h1>
    </div>
  );
};

export default App;
