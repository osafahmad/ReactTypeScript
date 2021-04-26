import React ,{useState}from 'react';
import QuestionCard from "../../components/QuestionCard"
import { fetchQuizQuestions , Difficulty ,QuestionState} from "../../apis/Api";
import {GlobalStyle} from "../../App.style"

const TOTAL_QUESTIONS = 10;
export type AnswerObject = {
  question:string,
  answers:string,
  correct:boolean,
  correctAnswer:string
}

const  Home = (props: any) =>{
  const [loading , setLoading] = useState(false);
  const [questions , setQuestions] = useState<QuestionState[]>([]);
  const [number , setNumber] = useState(0);
  const [userAnswers , setUserAnswers] = useState<AnswerObject[]>([]);
  const [score , setScore] = useState(0);
  const [gameOver , setGameOver] = useState(true);

  

  const startTrivia = async ()=>{
   setLoading(true);
   setGameOver(false);

    const newQuestion =  await fetchQuizQuestions(TOTAL_QUESTIONS , Difficulty.EASY)
    setQuestions(newQuestion);
    setScore(0);
    setUserAnswers([]);
    setNumber(0); 
    setLoading(false);
  }

  const nextQuestion = ()=>{
    const nextQuestion = number + 1;
    if(nextQuestion === TOTAL_QUESTIONS){
      setGameOver(true);
    }else{
      setNumber(nextQuestion);
    }
  }

  const checkAnswer = (e : React.MouseEvent<HTMLButtonElement>)=>{
      if(!gameOver){
          const answers = e.currentTarget.value
          
          const correct = questions[number].correct_answer === answers

          if(correct) setScore((prev) => prev + 1);

          const answerObject = {
            question:questions[number].question,
            answers,
            correct,
            correctAnswer : questions[number].correct_answer
          }

          setUserAnswers((prev) => [...prev,answerObject])
      }
  }
  const handleNavigate = (e : React.MouseEvent<HTMLButtonElement>)=>{
    const routeName = e.currentTarget.name
    props.history.push(routeName);
    console.log("Prop",routeName);
  }
  return (
    <>
    
    <div className="App">
      <h1> React Quiz</h1>
      {
        gameOver || userAnswers.length === TOTAL_QUESTIONS ?
        <button className="start" onClick={startTrivia}> Start</button>
        :
        null
      }
      {!gameOver ? <p className="score">Score: {score}</p> : null}
      {loading && <p>Loading Questions ....</p>}
      
      
      {
        !gameOver && !loading && (
            <QuestionCard 
            questionNr={number + 1} 
            totalQuestions={TOTAL_QUESTIONS} 
            userAnswer={userAnswers ? userAnswers[number] : undefined } 
            question={questions[number].question} 
            answers={questions[number].answers}
            callback={checkAnswer}
            /> 
        )
      }
    {
      !gameOver && !loading && userAnswers.length === number + 1 && number !== TOTAL_QUESTIONS - 1
      &&
      <button className="next" onClick={nextQuestion}>
        Next Question
      </button>
    }
      <button name={"calculator"} className="next" onClick={handleNavigate}>
          Go On Calculator
      </button>
      <button name={"topics"} className="next" onClick={handleNavigate}>
          Topics
      </button>
    </div>
    </>
  );
}

export default Home;
