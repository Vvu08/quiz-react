import questions from '../questions.js'

export default function Quiz ({question, step, onClickVariant}) {

    const percentage = Math.round(step / questions.length * 100)
  
    return(
      <>
      <div className='bar'>
        <div style = {{ width: `${percentage}%` }} className='progress'>  </div>
      </div>
      <div className='quiz-header'>
        <h1 className='quiz-title'>{question.title}</h1>
        <img className='quiz-img' src={window.location.origin + '/images/question'+ step +'.png'} alt='questionImage' />
      </div>
      <div className='answers'>
        {
          question.variants.map( (variant, index) => 
            <div key={index} onClick={ () => onClickVariant(index) } className='answer-card' >
              <h2>{variant.title}</h2>
              <p>{variant.text}</p>
            </div>
        )}
    
      </div>
      </>
    )
  }