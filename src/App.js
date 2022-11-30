import {useState} from 'react'
import questions from './questions.js'
import Quiz from './components/Quiz'
import Result from './components/Result'
import './App.css';

function App() {
  const [step, setStep] = useState(0)
  const [score, setScore] = useState(0)
  const question = questions[step]

  const onClickVariant = (index) => {
    setStep(step + 1)
    if (index === question.correct) {
      setScore(score + 1)
    }
  }

  return (
    <div className='card'>
      { step !== questions.length ? (
        <Quiz onClickVariant={onClickVariant} step={step} question={question}/>
      ) : (
        <Result score={score} />
      )}
      
    </div>
  );
}

export default App;