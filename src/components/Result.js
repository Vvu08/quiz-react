export default function Result ({score}) {
    const refreshPage = () =>  {
      window.location.reload();
    }

    return (
      <>
      <h1 className='result-title'>You scored {score} points!</h1>
      <img className='result-img' src={process.env.PUBLIC_URL + '/images/result.png'} alt='results'></img>
      <a className='back-btn'  onClick={refreshPage} >
        <h2 className='text'>Back to tests</h2>
      </a>
      </>
    )
    
  }