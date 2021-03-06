import React, { useEffect, useState } from 'react';
import Loading from './components/Loading';
import Tours from './components/Tours';
import './App.css';

const url = 'https://course-api.com/react-tours-project'

function App() {
  const [loading, setLaoding] = useState(true)
  const [tours, setTours] = useState([])

  const removeTour = (id) => {
    const newTours = tours.filter((tour) => tour.id !== id)
    setTours(newTours)
  }


  const fetchTours = async () => {
    setLaoding(true)
    try {
      const response = await fetch(url)
      const tours = await response.json()
      console.log(tours)
      setTours(tours) 
      setLaoding(false)
    } catch(error) {
      setLaoding(true)
      console.log(error)
    }
  }

  useEffect(()=> {
    fetchTours()
  }, [])

  if (loading) {
    return(
      <main>
        <Loading />
      </main>
    )
  }

  if (tours.length == 0) {
    return(
      <main>
        <div className='title'>
          <h2>No tours left!</h2>
          <button 
            onClick={()=>fetchTours()}
            className="btn"  
          >
              Refresh
          </button>
        </div>
      </main>
    )
  }

  return (
    <main>
      <Tours tours={tours} removeTour={removeTour}/>
    </main>
  );
}

export default App;
